import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";
import {
  EventModel,
  PaginateEvent,
  PaginateStoriesPost,
  PaginateTravelPost,
  StoriesPostModel,
  TravelPostModel,
} from "../model/Post";
import { Events, LoginForm, LoginUser, Orders, User } from "../model/User";
import { store } from "../store/store";

axios.defaults.baseURL = "https://ts.readyle.live/";
const sleep = () => new Promise(resolve => setTimeout(resolve,50));

axios.interceptors.request.use((config) => {
  delete axios.defaults.headers.common["Authorization"];
  const token = store.commonStore.token;
  if (token) config.headers!.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    if(process.env.NODE_ENV === 'development') await sleep();
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data, config, headers } = error.response as any;
      switch (status) {
        case 400:
          if (data.message) toast.error(data.message);
          break;

        case 401:
          if (
            status === 401 &&
            headers["www-authenticate"] &&
            headers["www-authenticate"].startsWith(
              "TokenExpiredError: jwt expired"
            )
          ) {
            store.userStore.logout();
            toast.error("Session expired - please login again");
          }
          break;

        case 404:
          history.push("/not-found");
          break;
        case 500:
          toast.error("Somthin gone wrong.. Please try sometime later");
      }
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  signUp: (user: User) => request.post<void>("/account/sign-up", user),
  signIn: (user: LoginForm) => request.post<LoginUser>("account/sign-in", user),
  currentUser: () => request.get<User>("/account/current-user"),
  editUser: (user: User, userId: string) =>
    request.post<User>(`/account/edit-user/${userId}`, user),
  uploadImage: (formData: FormData, userId: string) =>
    request.post<string>(`/account/upload-image/${userId}`, formData),
  myOrders : () => request.get<Orders[]>('/account/my-orders')
};

const PostAPI = {
  getAllPost: (currentPage: number, pageSize?: number) =>
    request.get<PaginateStoriesPost>(
      `/user/get-all-post?page=${currentPage}&&pageSize=${pageSize}`
    ),
  getPost: (postId: string) =>
    request.get<StoriesPostModel>(`/user/get-post/${postId}`),
  createPost: (value: FormData) =>
    request.post<void>("/user/create-post", value),
};

const Admin = {
  getUserList: () => request.get<User[]>("/admin/user-list"),
  editUserStatus: (userId: string) =>
    request.post<void>("/admin/user-status", { userId }),
};

const TravelAPI = {
  getTravelPostList: (currentPage: number, pageSize?: number) =>
    request.get<PaginateTravelPost>(
      `/travel/travel-post-list?page=${currentPage}&&pageSize=${pageSize}`
    ),
  getTravelPost: (productId: string) =>
    request.get<TravelPostModel>(`/travel/travel-post/${productId}`),
  createTravelPost: (value: FormData) =>
    request.post<void>("/travel/create-post", value),
};

const EventAPI = {
  createEvent: (value: FormData) =>
    request.post<void>("/event/create-event", value),
  getHighlightedEventList: () =>
    request.get<EventModel[]>("/event/highlighted-event-list"),
  getEventList: (currentPage: number, pageSize?: number) =>
    request.get<PaginateEvent>(
      `/event/event-list?page=${currentPage}&&pageSize=${pageSize}`
    ),
  getEvent: (eventId: string) =>
    request.get<EventModel>(`/event/get-event/${eventId}`),
  addEventToCart: (eventId: string) =>
    request.post<void>(`/event/add-event-cart/${eventId}`, {}),
  removeEventToCart: (eventId: string) =>
    request.post<void>(`/event/remove-event-cart/${eventId}`, {}),
};

const Payment = {
  eventPayment: (values: Events[]) => request.post<any>(`/event/create-checkout-session`, values),
  postOrders: (url: string) => request.post(url, {})
}
const Contact = {
  postQuestion: (values:any) => request.post<any>(`/contact/add-question`, values),
  postAnswer: (values:any,questionId:string) => request.post<any>(`/contact/add-answer/${questionId}`, values),
  getQuestion: () => request.get<any[]>(`/contact/get-question`),
  getQuestionForAdmin: () => request.get<any[]>(`/contact/get-question-admin`),
  getStudentList: () => request.get<User[]>(`/contact/get-student-list`),
  getEventList: () => request.get<EventModel[]>(`/contact/get-event-list`),
  postSuggestedData: (data:any) => request.post<void>(`/contact/suggest-students`,data),
}

const agent = {
  Account,
  PostAPI,
  Admin,
  TravelAPI,
  EventAPI,
  Payment,
  Contact
};

export default agent;

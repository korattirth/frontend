import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";
import { PostModel } from "../model/Post";
import { LoginForm, LoginUser, User } from "../model/User";
import { store } from "../store/store";

axios.defaults.baseURL = "http://localhost:8000/";

axios.interceptors.request.use((config) => {
  delete axios.defaults.headers.common["Authorization"];
  const token = store.commonStore.token;
  if (token) config.headers!.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  async (response) => {
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
            status === 401 &&  headers["www-authenticate"] &&
            headers["www-authenticate"].startsWith(
              'TokenExpiredError: jwt expired'
            )
          ) {
            store.userStore.logout();
            toast.error("Session expired - please login again");
          }
          break;
        
        case 404:
          history.push("/not-found");
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
};

const PostAPI = {
  getAllPost: () => request.get<PostModel[]>("/user/get-all-post"),
  createPost: (value: FormData) =>
    request.post<void>("/user/create-post", value),
};

const Admin = {
  getUserList: () => request.get<User[]>("/admin/user-list"),
  editUserStatus: (userId: string) =>
    request.post<void>("/admin/user-status", { userId }),
};

const agent = {
  Account,
  PostAPI,
  Admin,
};

export default agent;

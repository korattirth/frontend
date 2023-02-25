import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";
import { PostModel } from "../model/Post";
import { LoginForm, LoginUser, User } from "../model/User";
import { store } from "../store/store";

axios.defaults.baseURL = "http://localhost:8000/";

axios.interceptors.request.use((config) => {
  delete axios.defaults.headers.common['Authorization'];
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
      console.log(data.data, status);
      switch (status) {

        case 422:
          if (data.data.length > 0) {
            const modelStateErrors: string[] = [];
            for (const key in data.data) {
              if (data.data[key]) {
                modelStateErrors.push(data.data[key]);
              }
            }
            console.log(modelStateErrors.flat());
            throw modelStateErrors.flat();
          }
          if (typeof data === "string") toast.error(data);
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
  signUp: (user: User) => request.post<any>("/account/sign-up", user),
  signIn: (user: LoginForm) => request.post<LoginUser>("account/sign-in", user),
  currentUser: () => request.get<User>("/account/current-user"),
};

const PostAPI = {
  getAllPost: () => request.get<PostModel[]>('/user/get-all-post'),
  createPost: (value : FormData) => request.post<void>('/user/create-post',value),
}

const Admin = {
  getUserList : () => request.get<User[]>('/admin/user-list'),
  editUserStatus : (userId : string) => request.post<void>('/admin/user-status',{userId}),
}

const agent = {
  Account,
  PostAPI,
  Admin
};

export default agent;

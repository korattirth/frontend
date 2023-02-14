import axios, { AxiosError, AxiosResponse } from "axios";
import { User } from "../model/User";

axios.defaults.baseURL = "http://localhost:8000/";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
    signUp: (user: User) => request.post<any>("/account/register", user),
    signIn: (user: User) => request.post<any>("account/login", user),
}

const agent = {
    Account
  };
  
  export default agent;
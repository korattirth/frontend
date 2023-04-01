import { EventModel } from "./Post";

export interface User {
  userId: string;
  fName: string;
  lName: string;
  email: string;
  password: string;
  confirmPassword: string;
  homeAddress: string;
  address2: string;
  city: string;
  state: string;
  zipcode: number | undefined;
  dob: string;
  role: number;
  isActive: boolean;
  image: string;
  cart: Cart;
}

export interface Cart{
  events : Events[]
}

export interface Events{
  eventId: EventModel;
  quantity: number;
}

export interface Orders{
  _id: string;
  userId: string;
  eventId: EventModel;
  quantity: number;
  createdAt: string;
}

export interface LoginForm{
  email: string;
  password: string;
}

export interface LoginUser{
  userId: string;
  token: string;
  user: User;
}
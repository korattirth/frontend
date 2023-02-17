export interface User {
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
  department: string;
  dob: string;
}

export interface LoginForm{
  email: string;
  password: string;
}

export interface LoginUser{
  userId: string;
  token: string;
}
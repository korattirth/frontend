import * as Yup from "yup";
import { User } from "../model/User";

export const ragisterFormValidation = () => {
  return {
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("email is required")
      .email("Invalid email address format"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be 5 characters at minimum"),
    confirmPassword: Yup.string().required("Confirm Password is required"),
    homeAddress: Yup.string().required("Home Address is required"),
    address2: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.number().required("Zipcode is required"),
    department: Yup.string().required("Department is required"),
    dob: Yup.date().required("Date Of birth is required"),
  };
};

export const initialValues : User = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    homeAddress: "",
    address2: "",
    city: "",
    state: "",
    zipcode: undefined ,
    department: "",
    dob: "",
  };
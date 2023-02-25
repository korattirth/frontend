import * as Yup from "yup";
import { Roles } from "./shared";

export const ragisterFormValidation = () => {
  return {
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("email is required")
      .email("Invalid email address format"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be 5 character at minimum"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    homeAddress: Yup.string()
      .required("Home Address is required")
      .min(20, "Home Address must be 20 character at minimum"),
    address2: Yup.string()
      .required("Address is required")
      .min(10, "Home Address must be 10 character at minimum"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.number()
      .typeError("Please enter a valid Zipcode")
      .positive("Please enter a positive number")
      .integer("Please enter a whole number")
      .min(10000, "Zipcode must be at least 5 digits")
      .required("Zipcode is required"),
    department: Yup.string().required("Department is required"),
    dob: Yup.date().required("Date Of birth is required"),
  };
};

export const initialValues = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  confirmPassword: "",
  homeAddress: "",
  address2: "",
  city: "",
  state: "",
  zipcode: "",
  department: "",
  dob: "",
  error: null,
};


export const getRole = (id: number) => {
  if (id === Roles.Admin)
    return 'Admin'
  else if (id === Roles.ServiceProvider)
    return 'Creator'
  else
    return 'Student'
}
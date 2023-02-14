import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object({
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
});

const Ragister = () => {
  const initialValues = {
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

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-3">
        <div className="border ragisterContainer">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ margin: "40px 0px 34px 0px", color: "#1C343B" }}
          >
            <h3>Login</h3>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ marginBottom: "30px" }}
          >
            <p className="m-0">Alumni Association of</p>
            <h3 className="fw-bold">The TS High School</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="m-0 login_title">Register</p>
          </div>

          <div style={{ padding: "0px 30px", margin: "30px 0px" }}>
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ handleSubmit, isValid, isSubmitting ,dirty}) => (
                <Form autoComplete="off">
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginBottom: "15px" }}
                  >
                    <div className="w-100" style={{ marginRight: "10px" }}>
                      <label className="form-label m-0">FName</label>
                      <Field
                        type="text"
                        name="fName"
                        className="form-control"
                        placeholder="Enter First Name"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="fName"
                        component="div"
                      />
                    </div>
                    <div className="w-100" style={{ marginLeft: "10px" }}>
                      <label className="form-label m-0">LName</label>
                      <Field
                        type="text"
                        name="lName"
                        className="form-control"
                        placeholder="Enter Last Name"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="lName"
                        component="div"
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label className="form-label m-0">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="email"
                      component="div"
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label className="form-label m-0">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="password"
                      component="div"
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label className="form-label m-0">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Enter confirm Password"
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="confirmPassword"
                      component="div"
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label className="form-label m-0">Home Address</label>
                    <Field
                      type="text"
                      name="homeAddress"
                      className="form-control"
                      placeholder="Enter Home Address"
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="homeAddress"
                      component="div"
                    />
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ marginBottom: "15px" }}
                  >
                    <div className="w-100" style={{ marginRight: "10px" }}>
                      <label className="form-label m-0">Address2</label>
                      <Field
                        type="text"
                        name="address2"
                        className="form-control"
                        placeholder="Enter Address"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="address2"
                        component="div"
                      />
                    </div>
                    <div className="w-100" style={{ marginLeft: "10px" }}>
                      <label className="form-label m-0">Zipcode</label>
                      <Field
                        type="number"
                        name="zipcode"
                        className="form-control"
                        placeholder="Enter zipcode"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="zipcode"
                        component="div"
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginBottom: "15px" }}
                  >
                    <div className="w-100" style={{ marginRight: "10px" }}>
                      <label className="form-label m-0">City</label>
                      <Field
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="Enter city"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="city"
                        component="div"
                      />
                    </div>
                    <div className="w-100" style={{ marginLeft: "10px" }}>
                      <label className="form-label m-0">State</label>
                      <Field
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="Enter state"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="state"
                        component="div"
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginBottom: "15px" }}
                  >
                    <div className="w-100" style={{ marginRight: "10px" }}>
                      <label className="form-label m-0">Major</label>
                      <Field
                        type="text"
                        name="department"
                        className="form-control"
                        placeholder="Enter department"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="department"
                        component="div"
                      />
                    </div>
                    <div className="w-100" style={{ marginLeft: "10px" }}>
                      <label className="form-label m-0">Date Of Birth</label>
                      <Field
                        type="date"
                        name="dob"
                        className="form-control"
                        placeholder="Enter Date of birth"
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="dob"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn" style={{ backgroundColor: "#629549",color:"white"}} disabled={!(isValid && dirty)}>
                      Ragister
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div
              style={{
                height: "1px",
                width: "524px",
                backgroundColor: "#1C343B",
              }}
            ></div>
          </div>
          <div className="text-center" style={{ margin: "20px 0px" }}>
            <p className="m-0">
              Have an account?<Link to={"/login"}>login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ragister;

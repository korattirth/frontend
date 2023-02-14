import react from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "84vh" }}
      >
        <div className="border loginContainer">
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
            <p className="m-0 login_title">Login</p>
          </div>
          <div style={{ padding: "0px 30px", margin: "30px 0px" }}>
            <div style={{ marginBottom: "15px" }}>
              <label className="form-label m-0">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label className="form-label m-0">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="login_button">Login</button>
            </div>
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
              New user?<Link to={"/ragister"}>ragister</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

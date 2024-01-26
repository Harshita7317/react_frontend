import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [setotp, setisOtpsent] = useState(false);
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',

        height: "100vh",
        backgroundSize: "cover",
        display: "flex",
      }}
    >
      <div className="container">
        <form className="w-50 m-auto mt-5 border bg-dark border-success rounded">
          <div className="mb-3 m-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="harshita123@gmail.com"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3 m-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="********"
            />
            <div id="emailHelp" className="form-text">
              Enter your password
            </div>
            <div id="emailHelp" className="form-text">
              Enter OTP sent on your phone number
              <input type="number" />
            </div>
          </div>

          <button
            onClick={() => {
              setisOtpsent(true) ? navigate("/profile") : navigate("/login");
            }}
            type="submit"
            // onClick={() => navigate("/profile")}
            className="btn btn-success m-13"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="m-12 btn btn-danger"
            style={{ cursor: "pointer" }}
          >
            I'm a new user
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

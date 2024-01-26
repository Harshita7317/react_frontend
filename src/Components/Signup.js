import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/7194619/pexels-photo-7194619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
        }}
      >
        <div className="container">
          <form className="w-50 m-auto mt-5 border bg-dark border-outline rounded">
            <div className="mb-3 m-2">
              <div className="mb-3">
                <div style={{ fontSize: "25px", textAlign: "center" }}>
                  Signup Here!
                </div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control "
                  name="email"
                  placeholder="Enter your email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="geolocation"
                  placeholder="Enter your location"
                  id="exampleInputPassword"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success m-12">
              Submit
            </button>
            <button onClick={() => navigate("/login")} className="m-3">
              Already a user ?
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

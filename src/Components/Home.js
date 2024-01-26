import React from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/360438/pexels-photo-360438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "5px",
            alignItems: "center",
            display: "-ms-flexbox",
            fontSize: "55px",
          }}
        >
          Welcome to our website!
        </h1>
        <p style={{ textAlign: "center", fontSize: "25px" }}>
          Let's grow together
        </p>
        <button
          onClick={() => navigate("/signup")}
          style={{ cursor: "pointer", marginLeft: "730px" }}
          className="btn btn-success"
        >
          Join now!
        </button>{" "}
      </div>
    </>
  );
};

export default Home;

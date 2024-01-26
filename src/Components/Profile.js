import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Hello User, this is your profile</h1>
        <br />
        <br />
        <p>What's on your mind?</p>
        <p>email: harshitamishra912@gmail.com</p>
        <p>Contact: 9026210982</p>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </>
  );
};

export default Profile;

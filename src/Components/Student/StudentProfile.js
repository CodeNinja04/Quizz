import React from "react";
import { useGoogleAuth } from "../googleAuth";

import NavBar from "../assets/Navbar-student";

const StudentProfile = () => {
  const { googleUser } = useGoogleAuth();

  return (
    <div>
      <NavBar />
      <h1> {googleUser.profileObj.name} </h1>{" "}
      <p> {googleUser.profileObj.email} </p>{" "}
      <p>
        <img src={googleUser.profileObj.imageUrl} />{" "}
      </p>{" "}
    </div>
  );
};

export default StudentProfile;

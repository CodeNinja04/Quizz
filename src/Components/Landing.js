import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div> WELCOME TO QUIZZ APP </div>{" "}
      <Link to="/studentlogin"> STUDENTLOGIN </Link>{" "}
      <Link to="/teacherlogin"> TEACHERLOGIN </Link>{" "}
    </div>
  );
};

export default Landing;

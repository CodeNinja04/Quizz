import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StudentPage from "./Components/Student";
import TeacherPage from "./Components/Teacher";
import StudentLogin from "./Components/StudentLogin";
import TeacherLogin from "./Components/TeacherLogin";
import StudentRouter from "./Components/StudentRoute";
import TeacherRouter from "./Components/TeacherRoute";
import StudentStart from "./Components/StudentStart";
import TeacherStart from "./Components/TeacherStart";
import StudentProfile from "./Components/StudentProfile";
import TeacherProfile from "./Components/TeacherProfile";
import Landing from "./Components/Landing";

import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        StudentRouter path = "/student"
        component = { StudentPage }
        />{" "} <
        Route exact path = "/"
        component = { Landing }
        />{" "} <
        StudentStart path = "/studentlogin"
        component = { StudentLogin }
        />{" "} <
        TeacherStart path = "/teacherlogin"
        component = { TeacherLogin }
        />{" "} <
        TeacherRouter path = "/teacher"
        component = { TeacherPage }
        />{" "} <
        StudentRouter path = "/student-profile"
        component = { StudentProfile }
        />{" "} <
        TeacherRouter path = "/teacher-profile"
        component = { TeacherProfile }
        />{" "} <
        /BrowserRouter>{" "} <
        /div>
    );
}

export default App;
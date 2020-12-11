import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StudentPage from "./Components/Student/Student";
import TeacherPage from "./Components/Teacher/Teacher";
import StudentLogin from "./Components/Student/StudentLogin";
import TeacherLogin from "./Components/Teacher/TeacherLogin";
import StudentRouter from "./Components/Student/StudentRoute";
import TeacherRouter from "./Components/Teacher/TeacherRoute";
import StudentStart from "./Components/Student/StudentStart";
import TeacherStart from "./Components/Teacher/TeacherStart";
import StudentProfile from "./Components/Student/StudentProfile";
import TeacherProfile from "./Components/Teacher/TeacherProfile";
import Landing from "./Components/Landing";
import Room1 from "./Components/Student/rooms/room1";
import Room2 from "./Components/Student/rooms/room2";
import Room3 from "./Components/Student/rooms/room3";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StudentRouter path="/student" component={StudentPage} />{" "}
        <Route exact path="/" component={Landing} />{" "}
        <StudentStart path="/studentlogin" component={StudentLogin} />{" "}
        <TeacherStart path="/teacherlogin" component={TeacherLogin} />{" "}
        <TeacherRouter path="/teacher" component={TeacherPage} />{" "}
        <StudentRouter path="/student-profile" component={StudentProfile} />{" "}
        <TeacherRouter path="/teacher-profile" component={TeacherProfile} />
        <Route exact path="/room1" component={Room1} />
        <Route exact path="/room2" component={Room2} />
        <Route exact path="/room3" component={Room3} />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;

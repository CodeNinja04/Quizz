import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrivatePage from "./Components/Private";
import PublicPage from "./Components/Public";
import PrivateRouter from "./Components/PrivateRoute";
import PublicRouter from "./Components/PublicRoute";
import Profile from "./Components/profile";
import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        PrivateRouter path = "/private"
        component = { PrivatePage }
        /> <
        PublicRouter path = "/"
        component = { PublicPage }
        /> <
        PrivateRouter path = "/profile"
        component = { Profile }
        /> < /
        BrowserRouter > <
        /div>
    );
}

export default App;
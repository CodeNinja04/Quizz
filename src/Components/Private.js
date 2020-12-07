import React from "react";
import Logout from "./Logout";
import { useHistory } from "react-router-dom";
import { Calendar } from "antd";
import "antd/dist/antd.css";


const PrivatePage = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/profile");
    }

    function onPanelChange(value, mode) {
        console.log(value.format("YYYY-MM-DD"), mode);
    }

    return ( <
        div >
        <
        h2 > Private Page < /h2> <Logout / >
        <
        button type = "button"
        onClick = { handleClick } >
        Profile { " " } <
        /button> { " " } <
        div > < Calendar / > < /div> < /
        div >
    );
};

export default PrivatePage;
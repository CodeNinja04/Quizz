import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGoogleAuth } from "../googleAuth";

const StudentRoute = ({ component: Component, ...rest }) => {
    const { isSignedIn } = useGoogleAuth();

    return ( <
        div >
        <
        Route {...rest }
        render = {
            (props) =>
            isSignedIn ? ( <
                Component {...props }
                />
            ) : ( <
                Redirect exact from = "/student"
                to = "/" / >
            )
        }
        />{" "} < /
        div >
    );
};

export default StudentRoute;
import React from "react";
import { useGoogleAuth } from "../googleAuth";

const TeacherProfile = () => {
    const { googleUser } = useGoogleAuth();

    return ( <
        div >
        <
        h1 > { googleUser.profileObj.name } < /h1>{" "} <
        p > { googleUser.profileObj.email } < /p>{" "} <
        p >
        <
        img src = { googleUser.profileObj.imageUrl }
        />{" "} <
        /p>{" "} <
        /div>
    );
};

export default TeacherProfile;
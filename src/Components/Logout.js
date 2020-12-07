import React from "react";
import { useGoogleAuth } from "../googleAuth";

const Logout = () => {
    const { signOut } = useGoogleAuth();

    return <button onClick = { signOut } > Logout < /button>;
};

export default Logout;
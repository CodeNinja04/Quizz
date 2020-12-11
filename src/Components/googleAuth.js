import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {
    const googleAuth = useGoogleLogin({
        clientId: "168267871486-ars5236nbqlkch6g4t9hp1ie1jj5m0ib.apps.googleusercontent.com",

    });

    return ( <
        GoogleAuthContext.Provider value = { googleAuth } > { children } <
        /GoogleAuthContext.Provider>
    );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
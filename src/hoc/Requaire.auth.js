import React from "react";
import {Navigate} from "react-router-dom";

import {authService} from "../services";

const RequaireAuth = ({children}) => {

    if (authService.getAccessToken() === null && authService.getRefreshToken() === null){
        return <Navigate to={'/login'}/>
    }

    return children
};

export {RequaireAuth};
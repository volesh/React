import React from "react";
import {authService} from "../services";
import {Navigate} from "react-router-dom";

const RequaireAuth = ({children}) => {

    if (authService.getRefreshToken() === null && authService.getAccessToken() === null){
        return <Navigate to={'/login'}/>
    }
    return children
}


export {RequaireAuth};
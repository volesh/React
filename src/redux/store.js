import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {authReducer, carReducer} from "../slices";


const rootReducer = combineReducers({
    authReducer,
    carReducer
})

const setStore = () => configureStore({
    reducer:rootReducer
})

export {setStore}
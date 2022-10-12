import {combineReducers} from "redux";

import {authReducer, carReducer} from "../slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    authReducer,
    carReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}
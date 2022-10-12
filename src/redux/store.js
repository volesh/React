import {combineReducers} from "redux";

import {authReducer} from "../slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    authReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}
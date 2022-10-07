import {combineReducers} from "redux";

import {userReducer} from "../slices";
import {postReducer} from "../slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    userReducer,
    postReducer
})

const setupStore= () => configureStore({
    reducer:rootReducer
})

export {setupStore}
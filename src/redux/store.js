import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer, carReducer} from "../slices";


const rootReducer = combineReducers({
    userReducer,
    carReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}
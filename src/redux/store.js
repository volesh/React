import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, carReducer} from "../slices";

const rootReducer = combineReducers({
    authReducer,
    carReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}
import {combineReducers} from "redux";

import {carReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    carReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']


export type {
    AppDispatch, AppStore,RootState
}
export {setupStore}


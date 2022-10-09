import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    user:{},
    isAuth: false,
    error: null
}

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectedWithValue})=>{
        try {
            const {data} = await authService.login(user)
            return data
        }catch (e){

        }
    }
)

const authSlice =  createSlice({
    name:'authSlice',
    initialState,
    extraReducers:{
        [login.fulfilled]:(state, action)=>{
            authService.setTokens(action.payload)
            state.isAuth = true
        }
    },
    reducers:{}
})

const {reducer:authReducer, actions:{}} = authSlice

const authActions = {
    login
}

export {authActions, authReducer}
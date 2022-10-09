import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    user:{},
    isAust: false,
    error: null
}

const login = createAsyncThunk(
    'authSlice/login',
    async (_, {rejectedWithValue})=>{
        try {
            const {data} = authService.login()
            returndata
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
        }
    },
    reducers:{}
})

const {reducer:authReducer, actions:{}} = authSlice

const authActions = {}

export {authActions, authReducer}
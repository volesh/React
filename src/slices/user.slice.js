import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService} from "../services";
import {useNavigate} from "react-router-dom";


const initialState = {
    user:{},
    loadin:false,
    error:null
}

const login = createAsyncThunk(
    'userSlice/login',
    async (user, {rejectedWithValue}) =>{
        try {
            const data = authService.login(user)
            return data
        }catch (e) {
            return e
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [login.fulfilled]:(state, action) =>{
            authService.setTokens(action.payload.data)

        }
    }
})

const {reducer:userReducer, actions:{}} = userSlice

const userActions = {
    login
}

export {userReducer, userActions}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService} from "../services";

const initialState = {
    user:{},
    loadin:false,
    error:null
}

const login = createAsyncThunk(
    'userSlice/login',
    async ({user}, {rejectedWithValue, fulfillWithValue}) =>{
        try {
            const {data} = await authService.login(user)
            return fulfillWithValue(data)
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
            authService.setTokens(action.payload)
        },
        [login.rejected]:(state, action) =>{
            console.log(action.payload);
        }
    }
})

const {reducer:userReducer, actions:{}} = userSlice

const userActions = {
    login
}

export {userReducer, userActions}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    isAuth:false,
    error:null
}

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectWithValue})=>{
        try {
            const {data} = await authService.login(user)
            return data
        }catch (e) {
            return e
        }
    }
)

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [login.fulfilled]:(state, action)=>{
            authService.setTokens(action.payload)
            state.isAuth = true
        },
        [login.rejected]:(state, action)=>{
            state.isAuth = false
        }
    }
})

const {reducer:authReducer, actions:{}} = authSlice

const authActions = {
    login
}

export {authReducer, authActions}
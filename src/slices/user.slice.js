import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../services";

const initialState = {
    isAuth: false,
    error:null
}

const logIn = createAsyncThunk(
    'userSlice/logIn',
    async ({user}, {rejectedWithValue, fulfillWithValue})=>{
        try {
            const {data} = await authService.login(user)
            return fulfillWithValue(data)
        }catch (e) {
            console.log(e)
            return rejectedWithValue(e.response.data.detail)
        }
    }
)

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [logIn.fulfilled]:(state, action)=>{
            authService.setTokens(action.payload)
            state.isAuth = true
        },
        [logIn.rejected]:(state, action)=>{
            console.log(action.payload);
        }
    }
})

const {reducer:authReducer, actions:{}} = userSlice


const authActions = {
    logIn
}

export {authActions, authReducer}
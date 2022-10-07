import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../services";

let initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectedWithValue})=>{
        try {
            const {data} = await userService.getAll()
            return data
        }catch (e){
            return rejectedWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getAll.fulfilled]:(state, action)=>{
            state.users = action.payload
        }
    }
})

const {reducer:userReducer, actions:{}} = userSlice

const userActions = {
    getAll
}

export {
    userReducer,
    userActions
}
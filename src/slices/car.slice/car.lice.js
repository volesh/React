import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars:[],
    oneCar:{},
    error:null
}

const getAll = createAsyncThunk(
    'carSlice',
    async (_, {rejectedWithValue})=>{
        try {
            const {data} = await carsService.getAll()
            return data
        }catch (e) {
            return e
        }
    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getAll.fulfilled]:(state, action)=>{
            state.cars = action.payload.data
        }
    }
})

const {reducer:carReducer, actions:{}} = carSlice

const carActions = {
    getAll
}

export {carReducer, carActions}
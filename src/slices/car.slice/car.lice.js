import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";


const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) =>{
        const {data} = await carsService.getAll()
        return data
    }
)

const initialState = {
    cars:[],
    currentCar:{},
    error:null
}

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getAll.fulfilled]:(state, action) =>{
            state.cars = action.payload.data
        }
    }
})

const {reducer:carReducer, actions:{}} = carSlice

const carActions = {
    getAll
}

export {carReducer, carActions}
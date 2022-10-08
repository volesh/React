import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../services";

const initialState = {
    cars:[],
    currentCar:{},
    error:null,
    loading:false
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll()
        return data
    }
)

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async (car, {rejectWithValue}) => {
        const {data} = await carService.createCar(car)
        return data
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async (id, {rejectWithValue}) => {
        await carService.deleteCarById(id)
        return id
    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getAll.fulfilled]:(state, action)=>{
            state.cars = action.payload.data
        },
        [createCar.fulfilled]:(state, action)=>{
            state.cars = [...state.cars, action.payload]
        },
        [deleteCar.fulfilled]:(state, action) =>{
            state.cars = state.cars.filter(car => car.id !== action.payload)
        }
    }
})

const {reducer:carReducer, actions:{}} = carSlice

const carActions = {
    getAll,
    createCar,
    deleteCar
}

export {carReducer, carActions}
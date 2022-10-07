import {createSlice, RejectedWithValue, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../services";

const initialState = {
    cars:[],
    currentCar: null,
    loading: false,
    error: null

}

const ubdById = createAsyncThunk(
    'carSlice/ubdById',
    async ({car, id}, {RejectedWithValue}) =>{
        try {
            const {data} = await carService.updateBuId(id, car)
            return data
        }catch (e) {
            return RejectedWithValue(e.response.data)
        }
    }
)

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {RejectedWithValue}) => {
        try {
            const {data} = await carService.getAll()
            return data
        }catch (e) {
            return RejectedWithValue(e.response.data)
        }
    }
    );

const addCar = createAsyncThunk(
    'carSlice/addCar',
    async (car, {RejectedWithValue}) => {
        try {
            const {data} = await carService.addCar(car)
            return data
        }catch (e) {
            return RejectedWithValue(e.response.data)
        }
    }
);

const delCar = createAsyncThunk(
    'carSlice/delCar',
    async ({id}, {RejectedWithValue}) => {
        try {
            await carService.delCarById(id)
            return id
        }catch (e) {
            return RejectedWithValue(e.response.data)
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        abdCurrenCar:(state, action)=>{
            state.currentCar = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.cars = action.payload
            })
            .addCase(addCar.fulfilled, (state, action) => {
                state.cars = [action.payload, ...state.cars]
            })
            .addCase(delCar.fulfilled, (state, action)=>{
                const index = state.cars.findIndex(car=>car.id === action.payload)
                state.cars.splice(index, 1)
            })
            .addCase(ubdById.fulfilled, (state, action)=>{
                let index = state.cars.findIndex(car=> car.id === action.payload.id)
                Object.assign(state.cars[index], action.payload)
                state.currentCar = null
            })


})

const {reducer:carReducer, actions:{abdCurrenCar}} = carSlice

const carActions = {
    getAll,
    addCar,
    delCar,
    abdCurrenCar,
    ubdById
}

export {
    carReducer,
    carActions
}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../services";

const initialState = {
    cars:[],
    currentCar:{},
    error:null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectedWithValue, fulfillWithValue})=>{
        try {
            const {data} = await carService.getAll()
            console.log(data.data, 'data');
            return fulfillWithValue(data.data)
        }catch (e) {
            return e
        }
    }
)

// const getCars = createAsyncThunk(
//     'carSlice/getCars',
//     async (_, {fulfillWithValue,rejectWithValue}) => {
//         try {
//             const {data:{data}} = await carsService.getCars()
//             return fulfillWithValue(data)
//         } catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     }
// )

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getAll.fulfilled]:(state, action)=>{
            state.cars = action.payload
        },
        [getAll.rejected]:(state, action)=>{
            console.log(action.payload);
        }
    }
})



const {reducer:carReducer, actions:{}} = carSlice

const carActions = {
    getAll
}

export {carReducer, carActions}
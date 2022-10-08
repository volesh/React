import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../slices";
import {Car} from "../car/Car";
import {CarForm} from "../carForm/CarForm";

const Cars = () => {
    const dispatch = useDispatch()
    const {cars} = useSelector(state => state.carReducer)

    useEffect(()=>{
        dispatch(carActions.getAll())

    },[])

    return (
        <div>
            <CarForm/>
            <hr/>
            <div>
                {cars.map(car=><Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};
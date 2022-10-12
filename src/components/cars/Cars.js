import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions, carReducer} from "../../slices";
import {Car} from "../car/Car";

const Cars = () => {
    const dispath = useDispatch()
    const {cars} = useSelector(state => state.carReducer)

    useEffect(()=>{
        dispath(carActions.getAll())
    },[])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
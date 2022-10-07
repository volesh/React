import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../slices";

const Car = ({car}) => {
    let {id, model, year, price} = car
    let {currentCar} = useSelector(state => state.carReducer)
    const dispatch = useDispatch()

    const delCar = () =>{
        dispatch(carActions.delCar({id}))
    }
    const ubdCar = () =>{
        if(!currentCar || currentCar.id !== id){
            dispatch(carActions.abdCurrenCar(car))
        }else{
            dispatch(carActions.abdCurrenCar(null))
        }
    }

    return (
        <div>
            <div>id - {id}</div>
            <div>price - {price}</div>
            <div>model - {model}</div>
            <div>year - {year}</div>
            <button onClick={delCar}>Delete</button>
            <button onClick={ubdCar}>Ubdate</button>
        </div>
    );
};

export {Car};
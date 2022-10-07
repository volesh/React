import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../slices";
import {Car} from "../Car/Car";

const Cars = () => {

    let {cars} = useSelector(state => state.carReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
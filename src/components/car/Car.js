import React from "react";
import {useDispatch} from "react-redux";
import {carActions} from "../../slices";

const Car = ({car}) => {
    const {id, model, price, year} = car
    const dispath = useDispatch()

    return (
        <div>
            <div>id - {id}</div>
            <div>model - {model}</div>
            <div>price - {price}</div>
            <div>year - {year}</div>
            <button>Update</button>
            <button onClick={()=>{
                dispath(carActions.deleteCar(id))
            }}>Delete</button>
        </div>
    );
};

export {Car};
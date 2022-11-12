import React, {FC} from "react";
import {ICar} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps{
    car:ICar
}

const Car:FC<IProps> = ({car}) => {
    const {model, year, price, id} = car
    const navigate = useNavigate()
    return (
        <div>
            <div>Id - {id}</div>
            <div>Model - {model}</div>
            <div>Price - {price}</div>
            <div>Year - {year}</div>
            <button onClick={()=>navigate(`${id}`, {state:car})}>Details</button>
            <button>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};

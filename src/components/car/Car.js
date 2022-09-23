import React from "react";

const Car = ({car, delCar, setAbdCar}) => {
    return (
        <div className={'div'}>
            <p>Id - {car.id}</p>
            <p>Model - {car.model}</p>
            <p>Year - {car.year}</p>
            <p>Price - {car.price}$</p>
            <button onClick={()=>{setAbdCar(car)}}>Update</button>
            <button onClick={()=>{
                delCar(car.id)
            }}>Delete</button>
        </div>
    );
};

export {Car};
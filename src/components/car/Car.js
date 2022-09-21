import React from 'react';

import css from './Car.module.css'
import {carsService} from "../../services";

const Car = ({car, setCars}) => {

    const {id, model, price, year} = car

    const del = async () => {
        await carsService.deleteById(id)
        setCars(cars=>{
            const index = cars.findIndex(value => value.id === id)
            cars.splice(index, 1)
            console.log(index);
            return [...cars]
        })
    }

    return (
        <div className={css.carBlock}>
            <div className={css.car}>
                <div>Id. {car.id}</div>
                <div>Model. {car.model}</div>
                <div>Price. {car.price}</div>
                <div>Year. {car.year}</div>
            </div>
            <div className={css.btnBlock}>
                <button onClick={() => del()}>Delete</button>
                <button>Update</button>
            </div>
        </div>
    );
};

export {Car};
import React from 'react';

import css from './Car.module.css'
import {carsService} from "../../services";

const Car = ({car, del, togle, getCar}) => {

    const {id, model, price, year} = car



    return (
        <div className={css.carBlock}>
            <div className={css.car}>
                <div>Id - {car.id}</div>
                <div>Model - {car.model}</div>
                <div>Price - {car.price}$</div>
                <div>Year - {car.year}</div>
            </div>
            <div className={css.btnBlock}>
                <button className={css.btn} onClick={() => del(id)}>Delete</button>
                <button className={css.btn} onClick={() => {
                    getCar(id)
                    togle()
                }}>Update</button>
            </div>
        </div>
    );
};

export {Car};
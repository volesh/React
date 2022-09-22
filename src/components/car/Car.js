import React from 'react';
import {Button, Stack} from "@mui/material";


import css from './Car.module.css'


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
                <Button className={css.btn} variant={'outlined'} color={'error'} onClick={() => del(id)}>Delete</Button>
                <Button className={css.btn}  variant={'outlined'} onClick={() => {
                    getCar(id)
                    togle()
                }}>Update</Button>
            </div>
        </div>
    );
};

export {Car};
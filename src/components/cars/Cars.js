import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {Car} from "../car/Car";
import {CarsForm} from "../carsForms/CarsForm";
import css from './Cars.module.css'


const Cars = () => {
    let [cars, setCars] = useState([])

    useEffect(()=>{
        carsService.getAll().then(value => setCars(value.data))
    },[])


    return (
        <div className={'wrapper'}>

            <div className={'forms'}>
                <CarsForm setCars={setCars}/>
            </div>

            <hr/>
            <div className={css.Cars}>
                {cars.map(car=> <Car key={car.id} car={car} setCars={setCars}/>)}
            </div>
        </div>
    );
};

export {Cars};
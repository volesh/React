import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {Car} from "../car/Car";
import {CarsForm} from "../carsForms/CarsForm";
import css from './Cars.module.css'


const Cars = () => {
    let [cars, setCars] = useState([])
    let [car, setCar] = useState({})
    let [btn, setBtn] = useState(false)

    useEffect(()=>{
        carsService.getAll().then(value => setCars(value.data))
    },[])

    const togle = () => {
        setBtn(!btn)
    }

    const del = async (id) => {
        await carsService.deleteById(id)
        setCars(car => {
            const index = car.findIndex(value => value.id === id)
            cars.splice(index, 1)

            return [...cars]
        })
    }

    const getCar = (id) => {
        carsService.getById(id).then(value => setCar(value.data))
    }


    return (
        <div className={'wrapper'}>

            <div className={'forms'}>
                <CarsForm setCars={setCars} carr={car} togle={togle} btn={btn}/>
            </div>

            <hr/>
            <div className={css.Cars}>
                {cars.map(car=> <Car key={car.id} car={car} del={del} getCar={getCar} togle={togle}/>)}
            </div>
        </div>
    );
};

export {Cars};
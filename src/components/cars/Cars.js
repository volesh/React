import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {Car} from "../car/Car";
import {CarsForm} from "../carsForms/CarsForm";
import css from './Cars.module.css'


const Cars = () => {
    let [cars, setCars] = useState([])
    let [togle, setTogle] = useState(false)
    let [car, setCar] = useState({})

    const togl = () => {
        setTogle(!togle)
    }

    useEffect(()=>{
        carsService.getAll().then(value => setCars(value.data))
    },[])

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
    const update = (id, car) => {
      carsService.updateById(id, car)

    }


    return (
        <div className={'wrapper'}>

            <div className={'forms'}>
                <CarsForm setCars={setCars} togl={togl} togle={togle} update={update} carr={car}/>
            </div>

            <hr/>
            <div className={css.Cars}>
                {cars.map(car=> <Car key={car.id} car={car} del={del} togl={togl} getCar={getCar}/>)}
            </div>
        </div>
    );
};

export {Cars};
import React from "react";

import {carsService} from "../../services";
import css from './car.module.css'

const Car = ({car, setCars}) => {

    const sendPhoto = async (e) =>{
        const formData = new FormData();
        formData.append('photo', e.target.files[0])
        const {data} = await carsService.addPhotoById(car.id, formData)
        setCars(cars=>{
            let find = cars.find(auto=>auto.id === car.id)
            Object.assign(find, {...data, photo:URL.createObjectURL(e.target.files[0] )})
            return [...cars]
        }
        )
    }
    return (
        <div className={css.car}>
            <div>id - {car.id}</div>
            <div>model - {car.model}</div>
            <div>price - {car.price}</div>
            <div>year - {car.year}</div>
            {car.photo?
                <img className={css.img} src={car.photo} alt={car.model}/>
                :
                <input type="file" onChange={sendPhoto}/>
            }
        </div>
    );
};

export {Car};
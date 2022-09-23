import React, {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../car/Car";
import {CarForm} from "../carForm/CarForm";
import {axiosService} from "../../services/axios.service";

const Cars = () => {
    let [cars, setCars] = useState([]);
    let [abdCar, setAbdCar] = useState(null)

    useEffect(()=>{
        carService.getAllCars().then(value => setCars(value.data))
    },[abdCar])

    const newCar = (car) =>{
        setCars([...cars, car])
    }


    const delCar = async (id) => {
        await carService.deleteById(id)
        setCars(car=>{
            const index = car.findIndex(value => value.id === id)
            cars.splice(index, 1)
            return[...cars]
        })
    }

    return (
        <div>
            <CarForm newCar={newCar} abdCar={abdCar} setCars={setCars} setAbdCar={setAbdCar}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setAbdCar={setAbdCar} delCar={delCar}/>)}
        </div>
    );
};

export {Cars};
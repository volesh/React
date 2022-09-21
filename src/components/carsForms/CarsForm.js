import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";


const CarsForm = ({setCars}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'})

    const submit = async (car) => {
        const {data} = await carsService.create(car);
        setCars(cars=>[...cars, data])

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="number " placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CarsForm};
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";


const CarsForm = ({setCars, carr, togle, btn}) => {
    let {id, price, model, year} = carr
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'})

    const submit = async (car) => {
        if (id){
            const {data} = await carsService.updateById(id, car)
            setCars(cars=>[...cars])
            togle()
            reset()
        }else{
            const {data} = await carsService.create(car);
            setCars(cars=>[...cars, data])
            reset()
        }

    }
    useEffect(()=>{
        setValue('model', model)
        setValue('year', year)
        setValue('price', price)
    },[id])


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="number " placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{btn?<div>Update</div>:<div>Save</div>}</button>
        </form>
    );
};

export {CarsForm};
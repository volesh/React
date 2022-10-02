import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../../services";
import {carValidato} from "../../validators";

const CarsForm = ({setCars, ubdCar, setUbdCar, flag, setFlag, setId}) => {
    const {register, handleSubmit, formState:{isValid}, reset, setValue} = useForm({
        resolver:joiResolver(carValidato),
        mode:'all'
    })

    const submit = async (value) => {
        if(!flag){
            const {data} = await carsService.createCar(value)
            setCars(cars=>[...cars, data])
            reset()
        }else{
            await carsService.updateCar(ubdCar.id, value)
            setCars(cars=>[...cars])
            reset()
            setUbdCar(null)
            setFlag(false)
            setId(null)

        }
    }
    useEffect(()=>{
        if(flag && ubdCar){
            setValue('model', ubdCar.model)
            setValue('year', ubdCar.year)
            setValue('price', ubdCar.price)
        }else{
            setValue('model', '')
            setValue('year', '')
            setValue('price', '')
        }
    },[ubdCar])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Model'} {...register('model')}/>
            <input type="text" placeholder={'Price'} {...register('price')}/>
            <input type="text" placeholder={'Year'} {...register('year')}/>
            <button disabled={!isValid}>{!flag?'Save':'Update'}</button>
        </form>
    );
};

export {CarsForm};
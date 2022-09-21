import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";


const CarsForm = ({setCars, carr, togle, btn}) => {
    let {id, price, model, year} = carr
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'})

    const submit = async (car) => {
        if (id && btn){
            const {} = await carsService.updateById(id, car)
            setCars(cars=>[...cars])
            togle()
            reset()
        }else{
            const {data} = await carsService.create(car);
            setCars(cars=>[...cars, data])

        }

    }
    useEffect(()=>{
        if (btn){
            setValue('model', model)
            setValue('year', year)
            setValue('price', price)
        }else{
            setValue('model', '')
            setValue('year', '')
            setValue('price', '')
        }
    },[id, btn])


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="number " placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{btn?'Update':'Save'}</button>
        </form>
    );
};

export {CarsForm};
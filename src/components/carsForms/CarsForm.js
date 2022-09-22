import React, {useEffect} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";

import {useForm} from "react-hook-form";
import {carsService} from "../../services";
import {carValidator} from "../../validators";
import css from './carsForm.module.css'


const CarsForm = ({setCars, carr, togle, btn}) => {
    let {id, price, model, year} = carr
    const {register, handleSubmit, reset, formState:{errors,isValid}, setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:'all'
    })

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
        <form className={css.form} onSubmit={handleSubmit(submit)}>

            <div>
                <div className={css.input}>
                    <input className={css.inputColor} autoComplete={'off'} type="text" placeholder={'model'} {...register('model')}/><br/>
                    <div className={css.spanDiv}>{errors.model&&<span className={css.span}>{errors.model.message}</span>}</div>
                </div>

                <div className={css.input}>
                    <input className={css.inputColor} autoComplete={'off'} type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/><br/>
                    <div className={css.spanDiv}>{errors.price&&<span className={css.span}>{errors.price.message}</span>}</div>
                </div>

                <div className={css.input}>
                    <input className={css.inputColor} type="year" autoComplete={'off'} placeholder={'year'} {...register('year', {valueAsNumber: true})}/><br/>
                    <div className={css.spanDiv}>{errors.year&&<span className={css.span}>{errors.year.message}</span>}</div>
                </div>
            </div>

            <button className={css.btn} disabled={!isValid}>{btn?'Update':'Save'}</button>
        </form>
    );
};

export {CarsForm};
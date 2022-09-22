import React, {useEffect} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {InputAdornment} from "@mui/material";
import {Button, Stack} from "@mui/material";


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
                    <TextField className={css.input} id="outlined-basic" label="Model" variant="outlined" autoComplete={'off'} {...register('model')}/> <br/>
                    <div className={css.spanDiv}>{errors.model&&<span className={css.span}>{errors.model.message}</span>}</div>
                </div>

                <div className={css.input}>
                    <TextField
                        autoComplete={'off'}
                        {...register('price')}
                        label="Price"
                        id="outlined-start-adornment"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    /><br/>
                    <div className={css.spanDiv}>{errors.price&&<span className={css.span}>{errors.price.message}</span>}</div>
                </div>

                <div className={css.input}>
                    <TextField autoComplete={'off'} id="outlined-basic" label="Year" variant="outlined" {...register('year')}/><br/>
                    <div className={css.spanDiv}>{errors.year&&<span className={css.span}>{errors.year.message}</span>}</div>
                </div>
            </div>

            <Button variant={'outlined'} className={css.btn} disabled={!isValid}>{btn?'Update':'Save'}</Button>
        </form>
    );
};

export {CarsForm};
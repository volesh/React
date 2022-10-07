import React, {useEffect, useReducer} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {carActions} from "../../slices";
import {carValidator} from "../../validators/carFormValidation";



const CarForm = () => {
    const {register, handleSubmit, formState:{isValid, errors, isDirty}, reset, setValue} = useForm({
        mode:'all',
        resolver: joiResolver(carValidator)
    })
    let {currentCar} = useSelector(state => state.carReducer)
    const dispatch = useDispatch()

    const submit = async (value) => {
        if (!currentCar){
            const data = await dispatch(carActions.addCar(value))

        }else{
            await dispatch(carActions.ubdById({id:currentCar.id, car:value}))
        }
        reset()
    }

    useEffect(()=>{
        if (currentCar){
            setValue('model', currentCar.model)
            setValue('price', currentCar.price)
            setValue('year', currentCar.year)
        }else{
            setValue('model', '')
            setValue('price', '')
            setValue('year', '')
        }
    },[currentCar])

    console.log(errors);
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Model'} {...register('model')}/>
            {errors.model && isDirty && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'Price'} {...register('price')}/>
            {errors.price && isDirty && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'Year'} {...register('year')}/>
            {errors.year && isDirty && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{currentCar?'update':'save'}</button>
        </form>
    );
};

export {CarForm};
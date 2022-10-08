import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../slices";

const CarForm = () => {
    const {register, handleSubmit} = useForm();
    const dispath = useDispatch()

    const submit = (value) => {
        dispath(carActions.createCar(value))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};
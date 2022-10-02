import React from "react";
import {useForm} from "react-hook-form";
import {carsService} from "../../services";

const CarsForm = ({setCars, cars}) => {
    const {register, handleSubmit, formState:{isValid, errors}, reset} = useForm()

    function submit(value) {
        const data = carsService.createCar(value)
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Model'} {...register('model')} required={true}/>
            <input type="text" placeholder={'Price'} {...register('price')} required={true}/>
            <input type="text" placeholder={'Year'} {...register('year')} required={true}/>
            <button>Save</button>
        </form>
    );
};

export {CarsForm};
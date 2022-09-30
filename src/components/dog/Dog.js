import React from "react";
import {useForm} from "react-hook-form";

const Dog = ({dispatch}) => {
    const {handleSubmit, register, formState:{isValid},reset} = useForm()

    const submit = (val) =>{
        dispatch({...val, id:'dog'})
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Dog'} {...register('dog')} required/>
            <button>Save</button>
        </form>
    );
};

export {Dog};
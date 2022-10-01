import React from "react";
import {useForm} from "react-hook-form";

const Cat = ({dispatch}) => {
    const {handleSubmit, register, reset, formState:{isValid}} = useForm()

    const submit = (val) =>{
        dispatch({...val, id:'cat'})
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Cat'} {...register('cat')} required/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {Cat};
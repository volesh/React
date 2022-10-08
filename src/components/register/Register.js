import React from "react";
import {useForm} from "react-hook-form";

const Register = () => {
    const {register, handleSubmit} = useForm({mode:'all'})

    const submit = (value) => {

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Username'} {...register('username')}/>
            <input type="text" placeholder={'Password'} {...register('password')}/>
            <button>Register</button>
        </form>
    );
};

export {Register};
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../slices";

const Login = () => {
    const {register, handleSubmit, formState:{errors, isValid}} = useForm()
    const dispatch = useDispatch()

    const submit = (user) => {
        dispatch(authActions.login({user}))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export {Login};
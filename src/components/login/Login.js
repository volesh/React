import React from "react";
import {useForm} from "react-hook-form";
import {authActions} from "../../slices";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(authActions.logIn({user:data}))
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
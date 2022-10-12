import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../slices";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors, isValid}} = useForm()
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.authReducer)

    const submit = (user) => {
        dispatch(authActions.login({user}))

    }
    useEffect(()=>{
        if(isAuth){
            navigate('/cars')
        }else {
            navigate('/login')
        }
    },[isAuth])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export {Login};
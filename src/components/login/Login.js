import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";

import {authService} from "../../services";
import css from './login.module.css'
import {useDispatch} from "react-redux";
import {authActions} from "../../slices";


const Login = () => {

    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const [query, ] = useSearchParams();
    const dispatch = useDispatch()

    // const submit = async (user) => {
    //     try {
    //         const {data} = await authService.login(user)
    //         authService.setTokens(data)
    //         navigate('/cars')
    //     }catch (e){
    //         console.log(e);
    //     }
    // };
    const submit = async (user) =>{
        await dispatch(authActions.login({user}))
        navigate('/cars')
    }


    return (
        <form className={css.maine} onSubmit={handleSubmit(submit)}>

            {query.has('expSession')?<p>session end!!!</p>:<p>LogIn</p>}

            <input className={css.input} type="text" placeholder={'Login'} {...register('username')}/>
            <input className={css.input} type="text" placeholder={'Password'} {...register('password')}/>

            <button className={css.input}>Login</button>

        </form>
    );
};

export {Login};
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";
import css from '../login/login.module.css'

const Register = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const {register, handleSubmit} = useForm();


    const submit = async (user) => {
        try {
            await authService.register(user)
            navigate('/login')
        }catch (e){
            setError(e.response.data.username)
        }
    };

    return (
        <form className={css.maine} onSubmit={handleSubmit(submit)}>

            {error?<p>{error}</p>:<p>Register</p>}

            <input className={css.input} type="text" placeholder={'Login'} {...register('username')}/>
            <input className={css.input} type="text" placeholder={'Password'} {...register('password')}/>

            <button className={css.input}>Register</button>

        </form>
    );

};

export {Register};
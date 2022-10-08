import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {userActions} from "../../slices";

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const {register, handleSubmit} = useForm({mode:'all'})
    const dispatch = useDispatch()

    const submit = async (user) =>{
        try {
            await dispatch(userActions.login({user}))
            navigate('/cars')
        }catch (e){
            console.log(e);
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            {error&& <span>{error}</span>}
            <div>
                <input type="text" placeholder={'Username'} {...register('username')}/>
                <input type="text" placeholder={'Password'} {...register('password')}/>
                <button>Login</button>
            </div>
        </form>
    );
};

export {Login};
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const {register, handleSubmit} = useForm({mode:'all'})

    const submit = async (value) => {
        try {
            await authService.register(value)
            setError(null)
            navigate('/login')
        }catch (e){
            setError(e.response.data.username)
        }

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error&& <span>{error}</span>}
            <div>
                <input type="text" placeholder={'Username'} {...register('username')}/>
                <input type="text" placeholder={'Password'} {...register('password')}/>
                <button>Register</button>
            </div>
        </form>
    );
};

export {Register};
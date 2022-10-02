import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const {register, handleSubmit} = useForm()

    const submit = async (user) => {
        try {
            await authService.register(user)
            navigate('/login')
        }catch (e){
            setError(e.response.data.username)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error && <p>{error}</p>}
            <input type="text" placeholder={'Login'} {...register('username')}/>
            <input type="text" placeholder={'Password'} {...register('password')}/>
            <button>Register</button>
        </form>
    );

};

export {Register};
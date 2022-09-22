import {useForm} from "react-hook-form";
import {userService} from "../../services";

const UserForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm()

    const submit = async (user) =>{
        const {data} = await userService.createUser(user)
        console.log(data);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Name'} {...register('name')}/>
            <input type="text" placeholder={'Username'} {...register('username')}/>
            <input type="text" placeholder={'Email'} {...register('email')}/>
            <input type="number" placeholder={'Number'} {...register('phone')}/>
            <button>Send</button>
        </form>
    );
};

export {UserForm};
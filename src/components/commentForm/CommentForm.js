import {useForm} from "react-hook-form";
import {userService} from "../../services";


const CommentForm = () => {
    const {register, handleSubmit, reset} = useForm({mode:'all'})

    const submit = async (coment) => {
        const {data} = await userService.createComment(coment);
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Name'} {...register('name')}/>
            <input type="text" placeholder={'Email'} {...register('email')}/>
            <input type="text" placeholder={'Body'} {...register('body')}/>
            <button>Create</button>
        </form>
    );
};

export {CommentForm};
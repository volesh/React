import css from './login.module.css'
import {useForm} from "react-hook-form";

const Login = () => {
    const {register, handleSubmit} = useForm()

    return (
        <div className={css.box}>
            <div className={css.formBox}>
                <h3>Вхід</h3>
                <form>
                    <div className={css.form}>
                        <input type="text" required="required"/>
                        <span>Логін</span>
                        <i></i>
                    </div>
                    <div className={css.form}>
                        <input type="password" required="required"/>
                        <span>Пароль</span>
                        <i></i>
                    </div>
                    <button className={css.btn}>Ввійти</button>
                </form>
            </div>
        </div>
    );
};

export {Login};
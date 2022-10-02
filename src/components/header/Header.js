import React from "react";
import {useNavigate} from "react-router-dom";

import css from './header.module.css'

const Header = () => {
    let navigate = useNavigate()

    return (
        <div className={css.maine}>
            <button className={css.btn} onClick={()=>navigate('/login')}>Login</button>
            <button className={css.btn} onClick={()=>navigate('/register')}>Register</button>
        </div>
    );
};

export {Header};
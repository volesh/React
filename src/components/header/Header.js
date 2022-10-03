import React from "react";
import {useNavigate} from "react-router-dom";

import css from './header.module.css'
import {authService} from "../../services";

const Header = () => {

    let navigate = useNavigate();

    return (
        <div className={css.maine}>

            <button className={css.btn} onClick={()=>navigate('./cars')} >Cars</button>

            <>
                {localStorage.length===0?
                    <>
                        <button className={css.btn} onClick={()=>navigate('/login')}>Login</button>
                        <button className={css.btn} onClick={()=>navigate('/register')}>Register</button>
                    </>
                    :
                    <button className={css.btn} onClick={()=>{
                        authService.delTokens()
                        navigate('/login')
                    }}>LogOut</button>
                }
            </>

        </div>
    );
};

export {Header};
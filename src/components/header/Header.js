import React from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
    let navigate = useNavigate()

    return (
        <div>
            <button onClick={()=>navigate('/login')}>Login</button>
            <button onClick={()=>navigate('/register')}>Register</button>
        </div>
    );
};

export {Header};
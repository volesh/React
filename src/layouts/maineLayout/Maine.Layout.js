import React from "react";
import {Header} from "../../components";
import {Outlet} from "react-router-dom";

const MaineLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MaineLayout};
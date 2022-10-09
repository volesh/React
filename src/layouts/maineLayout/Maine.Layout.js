import React from "react";
import {Outlet} from "react-router-dom";

const MaineLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {MaineLayout};
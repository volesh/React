import React, {FC} from "react";
import {Outlet} from "react-router-dom";



const MaineLayout:FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {MaineLayout};

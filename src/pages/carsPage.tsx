import React, {FC} from "react";
import {Cars, CarsForm} from "../components";
import {Outlet} from "react-router-dom";

const CarsPage:FC = () => {
    return (
        <div>
            <CarsForm/>
            <Outlet/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};

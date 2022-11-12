import React, {FC} from "react";
import {useLocation, useParams} from "react-router-dom";

const CarDetails:FC = () => {
    const {id} = useParams<{id:string}>()
    const {state} = useLocation()


    return (
        <>

        </>
    );
};

export {CarDetails};

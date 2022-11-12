import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "../car/Car";
import {carActions} from "../../redux";

const Cars:FC = () =>{
    const {cars} = useAppSelector(state => state.carReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[dispatch])


    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};


import {Car} from "../car/Car";
import css from './cars.module.css'

const Cars = ({cars, setCars, id, setId, setFlag, setUbdCar}) => {

    return (
        <div className={css.carsDiv}>
            {cars.map(car=> <Car key={car.id} setUbdCar={setUbdCar} car={car} cars={cars} setCars={setCars} setId={setId} setFlag={setFlag} id={id}/>)}
        </div>
    );
};

export {Cars};
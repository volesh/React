
import {Car} from "../car/Car";
import css from './cars.module.css'

const Cars = ({cars, setCars}) => {

    return (
        <div className={css.carsDiv}>
            {cars.map(car=> <Car key={car.id} car={car} setCars={setCars}/>)}
        </div>
    );
};

export {Cars};
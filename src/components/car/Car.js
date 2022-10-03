import {carsService} from "../../services";
import css from './car.module.css'

const Car = ({car, setUbdCar, setCars, id, setId, setFlag}) => {


    const sendPhoto = async (e) =>{
        const formData = new FormData();
        formData.append('photo', e.target.files[0]);

        const {data} = await carsService.addPhotoById(car.id, formData);

        setCars(cars=>{
            let find = cars.find(auto=>auto.id === car.id)
            Object.assign(find, {...data, photo:URL.createObjectURL(e.target.files[0] )})
            return [...cars]
        });
    }

    const delCar = (id) =>{

        carsService.delById(id);

        setCars(car=>{
            const index = car.findIndex(value => value.id === id)
            car.splice(index, 1)
            return [...car]
        });
    }

    const update = (val) =>{

        if(id !== val){
            setId(val)
            setFlag(true)
            setUbdCar({...car})
        }else {
            setFlag(false)
            setId(null)
            setUbdCar(null)

        }
    }

    return (
        <div className={css.car}>

            <div>id - {car.id}</div>
            <div>model - {car.model}</div>
            <div>price - {car.price}</div>
            <div>year - {car.year}</div>

            {car.photo?
                <img className={css.img} src={car.photo} alt={car.model}/>
                :
                <input type="file" onChange={sendPhoto}/>
            }

            <button onClick={() => delCar(car.id)}>Delete</button>
            <button onClick={()=>update(car.id)}>Update</button>

        </div>
    );
};

export {Car};
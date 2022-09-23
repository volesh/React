import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({newCar, abdCar, setAbdCar, setCars}) => {
    const {register, handleSubmit, setValue, formState:{errors, isValid}, reset} = useForm({mode:'all'})

    const submit = async (car) => {
        if(abdCar){
            const {data} = await carService.updateById(abdCar.id, car)
            setCars((cars)=>{
                const index = cars.find(value => value.id === abdCar.id)
                Object.assign(index, data)
                setAbdCar(null)
                return[...cars]
            })
        }else{
            const {data} = await carService.createCar(car);
            newCar(data)
        }
    }

    useEffect(()=>{
        if(abdCar){
            setValue('model', abdCar.model)
            setValue('price', abdCar.price)
            setValue('year', abdCar.year)
        }else{
            setValue('model', '')
            setValue('price', '')
            setValue('year', '')
        }
    },[abdCar])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Model'} {...register('model')}/>
            <input type="number" placeholder={'Price'} {...register('price', {valueAsNumber:true})}/>
            <input type="number" placeholder={'Year'} {...register('year', {valueAsNumber:true})}/>
            <button>{abdCar?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};
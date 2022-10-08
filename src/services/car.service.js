import {axiosService} from "./axious.service";
import {urls} from "../configs";


const carService = {
    getAll:()=>axiosService.get(urls.cars),
    createCar:(car)=>axiosService.post(urls.cars, car),
    deleteCarById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    ubdateById:(id, car)=>axiosService.put(`${urls.cars}/${id}`, car)
    
}

export {carService}
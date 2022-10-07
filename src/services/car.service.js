import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carService = {
    getAll:()=>axiosService.get(urls.cars),
    addCar:(car)=>axiosService.post(urls.cars, car),
    updateBuId:(id, car)=>axiosService.put(`${urls.cars}/${id}`, car),
    delCarById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}

export {carService}
import {axiosService} from "./axious.service";
import {urls} from "../configs";

const carsService = {
    getAll:(page=1)=>axiosService.get(urls.cars, {params:{page}}),
    createCar:(car)=>axiosService.post(urls.cars, car),
    updateCar:(id, car)=>axiosService.put(`${urls.cars}/${id}`, car),
    addPhotoById:(id, data)=>axiosService.patch(`${urls.cars}/${id}`, data)
}

export {carsService}
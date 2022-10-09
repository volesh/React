import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carService = {
    getAll:()=>axiosService.get(urls.cars)
}

export {carService}
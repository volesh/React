import {axiosService} from "./axious.service";
import {urls} from "../configs";


const carService = {
    getAll:()=>axiosService.get(urls.cars)
    
}
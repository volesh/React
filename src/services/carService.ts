import {AxiosRes, axiosService} from "./axiosService";

import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAll:():AxiosRes<ICar[]>=>axiosService.get(urls.cars)
}

export {carService}

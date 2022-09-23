import {axiosService} from "./axios.service";


const carService = {
    getAllCars:()=>axiosService.get(),
    createCar:(car)=>axiosService.post('', car),
    getById:(id)=>axiosService.get(`/${id}`),
    updateById:(id, car)=>axiosService.put(`/${id}`, car),
    deleteById:(id)=>axiosService.delete(`/${id}`)
}
export {carService}
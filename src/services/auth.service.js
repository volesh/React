import {axiosService} from "./axious.service";
import {urls} from "../configs";


const authService = {
    login:(user)=>axiosService(urls.auth.login, user),
    register:(user)=>axiosService(urls.users, user),
    refresh:(refresh)=>axiosService.post(urls.auth.refresh, {refresh})
}

export {authService}
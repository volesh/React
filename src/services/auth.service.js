import {axiosService} from "./axious.service";
import {urls} from "../configs";

const _access = 'access'
const _refresh = 'refresh'

const authService = {
    login:(user)=>axiosService.post(urls.auth.login, user),
    register:(user)=>axiosService.post(urls.users, user),
    refresh:(refresh)=>axiosService.post(urls.auth.refresh, {refresh}),

    setTokens:({access, refresh})=>{
        localStorage.setItem(_access, access)
        localStorage.setItem(_refresh, refresh)
    },

    getAccess:()=> localStorage.getItem(_access),
    getRefresh:()=> localStorage.getItem(_refresh),

    delTokens:()=>{
        localStorage.removeItem(_refresh)
        localStorage.removeItem(_access)
    }
}

export {authService}
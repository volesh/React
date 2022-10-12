import {axiosService} from "./axios.service";
import {urls} from "../configs";

const _accessToken = 'access'
const _refreshToken = 'refresh'

const authService = {
    register:(user)=>axiosService.post(urls.users, user),
    login:(user)=>axiosService.post(urls.auth.login, user),
    refresh:(refresh)=>axiosService.post(urls.auth.refresh, {refresh}),

    setTokens:({access, refresh})=>{
        localStorage.setItem(_accessToken, access)
        localStorage.setItem(_refreshToken, refresh)
    },

    getAccess:()=>localStorage.getItem(_accessToken),
    getRefresh:()=>localStorage.getItem(_refreshToken),

    gelTokens:()=>{
        localStorage.removeItem(_accessToken)
        localStorage.removeItem(_refreshToken)
    }
}

export {authService}
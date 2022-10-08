import {axiosService} from "./axious.service";
import {urls} from "../configs";

const _accessKey = 'access'
const _refreshKey = 'refresh'

const authService = {
    register:(user)=>axiosService.post(urls.users, user),
    login:(user)=>axiosService.post(urls.auth.login, user),
    refresh:(refresh)=>axiosService.post(urls.auth.refresh, {refresh}),

    setTokens:({refresh, access})=>{
        localStorage.setItem(_accessKey, access)
        localStorage.setItem(_refreshKey, refresh)
    },

    getAccessToken:()=>localStorage.getItem(_accessKey),
    getRefreshToken:()=>localStorage.getItem(_refreshKey),

    detTokens:()=>localStorage.clear()
}

export {authService}
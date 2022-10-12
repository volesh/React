import {createBrowserHistory} from "history"
import {axios} from "axios";

import {baseURL} from "../configs";
import {authService} from "./auth.service";

const history = createBrowserHistory()
let isRefreshing = false

const axiosService = axios.create({baseURL})


axiosService.interceptors.request.use((config)=>{
    const acces = authService.getAccessToken()

    if(acces){
        config.headers.Authorization = `Bearer ${acces}`
    }
    return config

});

axiosService.interceptors.response.use((config)=>{
    return config

    },
    async (error)=>{
        const refresh = authService.getRefreshToken()

        if(error.response?.status === 401 && refresh && !isRefreshing) {
            isRefreshing = true

            try {
                const {data} = await authService.refresh(refresh)
                authService.setTokens(data)

            } catch (e) {
                authService.delTokens()
                history.replace('/login?expSession=true')
            }

            isRefreshing = false
            return axiosService(error.config)
        }

        return Promise.reject(error)
    }
    )

export {axiosService, history};
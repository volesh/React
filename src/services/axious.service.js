import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./auth.service";

const axiosService = axios.create({baseURL})

let history = createBrowserHistory()


axiosService.interceptors.request.use((config)=>{
    const access = authService.getAccess()

    if(access){
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})
let isRefreshing = false
axiosService.interceptors.response.use(config=>config,
    async (error) =>{
    const refresh = authService.getRefresh()
    if(error.response?.status === 401 && refresh && !isRefreshing){
        isRefreshing = true
        try {
            const {data} = await authService.refresh(refresh)
            authService.setTokens(data)
        }catch (e) {
            authService.delTokens()
            history.replace('/login')
        }
        isRefreshing = false
        return axiosService(error.config)
    }
    return Promise.reject(error)
    }
    )

export {axiosService}
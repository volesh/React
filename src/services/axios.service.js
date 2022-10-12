import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./auth.service";


const axiosService = axios.create({baseURL})
const history = createBrowserHistory()


axiosService.interceptors.request.use((config) => {

    const accessToken = authService.getAccess()

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config

})

let isRefreshing = false;

axiosService.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const refreshToken = authService.getRefresh()

    if (error.response?.status === 401 && refreshToken && !isRefreshing) {
        isRefreshing = true;
        try {
            const {data} = await authService.refresh(refreshToken)
            authService.setTokens(data)
        } catch (e) {
            authService.gelTokens()
            history.replace('/login')
        }
        isRefreshing = false;
        return axiosService(error.config)
    }

    return Promise.reject(error)

})


export {axiosService,history}
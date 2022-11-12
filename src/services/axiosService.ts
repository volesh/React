import axios, {AxiosResponse} from "axios";

import {baseURL} from "../configs";

type AxiosRes<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({baseURL})


export type {AxiosRes}
export {axiosService}

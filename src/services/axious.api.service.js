import axios from "axios";

import {baseURL} from "../configs/Urls";


const axiousApiService = axios.create({baseURL})

export {axiousApiService}
import axios from "axios";

import {baseURL} from "../configs";


const axiosServise = axios.create({baseURL})

export {axiosServise}
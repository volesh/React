import {axiosServise} from "./axios.servise";
import {urls} from "../configs";

const userService = {
    getAll:()=>axiosServise.get(urls.users)
}

export {userService}
import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getUsers:() => axiosService.get(urls.users),
    getComments:() => axiosService.get(urls.comments),
    createUser:(user) => axiosService.post(urls.comments, user),
    createComment:(comment) => axiosService.post(urls.comments, comment)
}

export {userService}
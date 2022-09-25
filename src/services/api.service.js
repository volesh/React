import {axiosService} from "./axios.service";
import {url} from "../configs";

const apiService = {
    getTodos:()=>axiosService.get(url.todos),
    getComments:()=>axiosService.get(url.comments),
    getAlbus:()=>axiosService.get(url.albums),
    getPostById:(id)=>axiosService.get(`${url.posts}/${id}`),
    getCommentsById:(id)=>axiosService.get(`${url.comments}?postId=${id}`)
};

export {apiService}
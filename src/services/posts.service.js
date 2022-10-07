import {axiosServise} from "./axios.servise";
import {urls} from "../configs";

const postsService = {
    getAll:()=>axiosServise.get(urls.posts)
}

export {postsService}
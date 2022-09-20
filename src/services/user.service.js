import {axiousApiService} from "./axious.api.service";
import {urls} from "../configs/Urls";

const userService = {
    getUsers: () => axiousApiService.get(urls.users),
    getPosts: (id) => axiousApiService.get(urls.users + `/` + id + urls.posts)
}

export {userService}
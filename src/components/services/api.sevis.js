import axios from "axios";

let axious = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
})

const getAxious = () => {
    return axious()
}

const getAxiousPosts = (id) => {
    return axious.get('/' + id + '/posts')
}

export {getAxious, getAxiousPosts}
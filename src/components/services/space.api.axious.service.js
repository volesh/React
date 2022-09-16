import axios from "axios";
let axiousInfo =  axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
})


const getFlightsAxious = () => {
    return axiousInfo.get()
}

const getFlightAxious = (n) => {
    return axiousInfo.get(n)

}
export {getFlightAxious, getFlightsAxious}
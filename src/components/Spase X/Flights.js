import {useEffect, useState} from "react";
import {getFlightsAxious} from "../services/space.api.axious.service";
import Flight from "./Flight";

export default function Flights(){
    let [flights, setFlights] = useState([])


    useEffect(() => {
        getFlightsAxious().then(value => setFlights(value.data))

    }, [])

    return(<div className={'flights'}>
        {flights.filter(value => value.launch_year !== '2020').map((flight, index) => <Flight item={flight} key={index}/>)}
    </div>)
}
import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Cars, CarsForm} from "../../components";
import {carsService} from "../../services";
import css from './carsPage.module.css'


const CarsPage = () => {

    const [cars, setCars] = useState([])
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)
    const [query, setQuery] = useSearchParams({page:'1'})
    const [id, setId] = useState(null)
    const [flag, setFlag] = useState(false)
    const [ubdCar, setUbdCar] = useState(null)


    useEffect(()=>{
        carsService.getAll(query.get('page')).then(({data:value}) =>{
            setCars(value.data)
            setPrev(value.prev)
            setNext(value.next)
        })
    },[query, cars])


    const prevPage = ()=>{
        setQuery(value=>({page:+value.get('page') - 1}))
    };


    const nextPage = ()=>{
        setQuery(value=>({page:+value.get('page') + 1}))
    };



    return (
        <div>
            <CarsForm setId={setId} setFlag={setFlag} ubdCar={ubdCar} setUbdCar={setUbdCar} setCars={setCars} flag={flag} cars={cars} id={id}/>

            <hr/>

            <Cars setUbdCar={setUbdCar} cars={cars} setCars={setCars} setId={setId} setFlag={setFlag} id={id}/>

            <div className={css.btns}>
                <button  disabled={!prev} onClick={prevPage}>Prev</button>
                <button disabled={!next} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {CarsPage};
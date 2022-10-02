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

    useEffect(()=>{
        carsService.getAll(query.get('page')).then(({data:value}) =>{
            setCars(value.data)
            setPrev(value.prev)
            setNext(value.next)
        })
    },[query])

    const prevPage = ()=>{
        setQuery(value=>({page:+value.get('page') - 1}))
    }
    const nextPage = ()=>{
        setQuery(value=>({page:+value.get('page') + 1}))
    }

    return (
        <div>
            <CarsForm setCars={setCars} cars={cars}/>
            <hr/>
            <Cars cars={cars} setCars={setCars}/>
            <div className={css.btns}>
                <button  disabled={!prev} onClick={prevPage}>Prev</button>
                <button disabled={!next} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {CarsPage};
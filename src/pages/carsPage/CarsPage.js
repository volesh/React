import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Cars, CarsForm} from "../../components";
import {carsService} from "../../services";
import css from './carsPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../slices";


const CarsPage = () => {
    const {cars} = useSelector(state=>state.carReducer)
    const dispatch = useDispatch()
    // const [cars, setCars] = useState([])
    // const [prev, setPrev] = useState(null)
    // const [next, setNext] = useState(null)
    const [query, setQuery] = useSearchParams({page:'1'})
    const [id, setId] = useState(null)
    const [flag, setFlag] = useState(false)
    const [ubdCar, setUbdCar] = useState(null)


    // useEffect(()=>{
    //     carsService.getAll(query.get('page')).then(({data:value}) =>{
    //         setCars(value.data)
    //         setPrev(value.prev)
    //         setNext(value.next)
    //     })
    // },[query, ubdCar])

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])


    const prevPage = ()=>{
        setQuery(value=>({page:+value.get('page') - 1}))
    };


    const nextPage = ()=>{
        setQuery(value=>({page:+value.get('page') + 1}))
    };



    return (
        <div>
            {/*{<CarsForm/>}*/}
            {/*<CarsForm setId={setId} setFlag={setFlag} ubdCar={ubdCar} setUbdCar={setUbdCar} setCars={setCars} flag={flag} cars={cars} id={id}/>*/}
            <hr/>

            {/*<Cars setUbdCar={setUbdCar} cars={cars} setCars={setCars} setId={setId} setFlag={setFlag} id={id}/>*/}

            {<Cars cars={cars}/>}
            {/*<div className={css.btns}>*/}
            {/*    <button  disabled={!prev} onClick={prevPage}>Prev</button>*/}
            {/*    <button disabled={!next} onClick={nextPage}>Next</button>*/}
            {/*</div>*/}
        </div>
    );
};

export {CarsPage};
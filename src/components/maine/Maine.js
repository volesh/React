import React, {useReducer} from "react";
import {useForm} from "react-hook-form";

import {Cat} from "../cat/Cat";
import {Dog} from "../dog/Dog";
import css from './maine.module.css'



const reducer =  (state, action) => {
    switch (action.id){
        case 'cat' :
            state.cats.push(action.cat)
            return {...state}
        case 'dog' :
            state.dogs.push(action.dog)
            return {...state}
        case 'catDel':
            state.cats.splice(action.index, 1)
            return {...state}
        case 'dogDel':
            state.dogs.splice(action.index, 1)
            return {...state}
    }
    return {...state}

}

const Maine = () => {
    let {register, handleSubmit} = useForm()
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});




    return (
        <div>
            <div>
                <div className={css.inputDiv}>
                    <div>Cats {<Cat dispatch={dispatch} state={state}/>}</div>
                    <div>Dogs {<Dog dispatch={dispatch} state={state}/>}</div>
                </div>
            </div>
            <div className={css.low}>
                <div>
                    {state.cats.map((cat, index) => <div>{cat} <button onClick={() => dispatch({id:'catDel', index:index})}>Delete</button></div>)}
                </div>
                <div>
                    {state.dogs.map((dog, index) => <div onClick={() => dispatch({id:'dogDel', index:index})}>{dog} <button>Delete</button></div>)}
                </div>
            </div>
        </div>
    );
};

export {Maine};
import React, {useEffect, useState} from "react";
import {apiService} from "../../services";
import {Todo} from "../todo/Todo";

const Todos = () => {
    let [todos, setTodos] = useState([])

    useEffect(()=>{
        apiService.getTodos().then(value => setTodos(value.data))
    },[])

    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};
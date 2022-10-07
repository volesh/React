import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../slices";

const Users = () => {

    let dispatch = useDispatch()
    let {users} = useSelector(state => state.userReducer)

    useEffect(()=>{
        const {data} = dispatch(userActions.getAll())
    },[])

    return (
        <div>
            {users.map(user=><div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export {Users};
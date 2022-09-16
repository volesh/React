import {useEffect, useState} from "react";
import User from "./User";
import UserInfo from "./UserInfo";


export default function Users(){
    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)
    let x = (u) => {
        setUser(u)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    },[x])

    return(<div className={'wrap'}>
            <div className={'all'}>{users.map(user => <User user={user} x={x} key={user.id}/>)}</div>
            <div className={'info'}>{user && <UserInfo user={user}/>}</div>

        </div>
    )
}
import {useEffect, useState} from "react";

import User from "./User";
import UserInfo from "./User_info";

export default function Users(){
    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)

    let info = (user) => {
        setUser(user)
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [info])

    return(<div className={'wrap'}>
        <div className={'users'}>
            {users.map(user => <User user={user} key={user.id} info={info}/>)}
        </div>
        <div className={'info'}>
            {user && <UserInfo user={user}/>}
        </div>
    </div>)
}
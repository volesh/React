import {useEffect, useState} from "react";

import {userService} from "../../services";
import {UserForm} from "../userForm/UserForm";
import {User} from "../user/User";
import {CommentForm} from "../commentForm/CommentForm";

const Users = () => {
    let [users, setUsers] = useState([])

    useEffect(()=>{
        userService.getUsers().then(value => setUsers(value.data))
        console.log(users);
    }, [])
    return (
        <div>
            <h2>Create User</h2>
            <UserForm/>
            <hr/>
            <h2>Create comment</h2>
            <CommentForm/>
        </div>
    );
};

export {Users};
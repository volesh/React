import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "../user/User";
import {UserDetails} from "../userDetails/UserDetails";
import {Posts} from "../posts/Posts";

const Users = () => {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState({})
    let [posts, setPosts] = useState([])
    let [btn, setBtn] = useState(false)

    const oneUser = (user) =>{
        setUser(user)
    }

    const changeBtn = () =>{
        setBtn(!btn)
    }

    const post = (id) => {
        userService.getPosts(id).then(value => setPosts(value.data))
    }

    useEffect(() =>{
        userService.getUsers().then(value => setUsers(value.data))
    },[])

    return (
        <div className={'erapper'}>

            <div className={'users'}>
                {users.map(user => <User key={user.id} user={user} post={post} foo={oneUser}/>)}
            </div>

            <div className={'info'}>
                {user && <UserDetails key={user.id} user={user} foo={changeBtn}/>}
            </div>

            <div className={posts}>
                {btn && <Posts posts={posts}/>}
            </div>

        </div>
    );
};

export {Users};
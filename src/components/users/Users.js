import {useEffect, useState} from "react";

import User from "./User";
import UserInfo from "./User_info";
import {getAxious, getAxiousPosts} from "../services/api.sevis";
import UsersPosts from "./UsersPosts";

export default function Users(){
    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)
    let [posts, setPosts] = useState(null)
    let [showposts, setShowposts] = useState(false)

    let post = (id) =>{
        getAxiousPosts(id).then(value => setPosts(value.data))
    }
    let info = (user) => {
        setUser(user)
    }

    let togle = () => {
        setShowposts(!showposts)
    }

    useEffect(() => {
        getAxious().then(value => setUsers(value.data))
    }, [])

    return(<div>
        <div className={'wrap'}>
            <div className={'users'}>
                {users.map(user => <User user={user} key={user.id} info={info} post={post}/>)}
            </div>

            <div className={'info'}>
                {user && <UserInfo user={user} posts={posts} togle={togle}/>}
            </div>
        </div>
        <div className={info}>
            {showposts && <UsersPosts post={posts}/>}
        </div>
    </div>)
}
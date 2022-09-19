import {useState} from "react";
import {getAxiousPosts} from "../services/api.sevis";


export default function ({user, info, post}){

    let id = user.id
    return(<div className={'user_container'}>
        <div className={'user'}>
            {user.id} - {user.name}
        </div>
        <button onClick={() => {
            let a = document.getElementsByClassName('info')[0]
            info(user)
            post(id)
            a.style.display = 'flex'
        }} className={'button'}>Click</button>
    </div>)
}
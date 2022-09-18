import AllUsers from "./all_users";
import User from "./User";
export default function Users(){
    let users = AllUsers


    return(<div className={'container'}>
        <div className={'users'}>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    </div>)
}
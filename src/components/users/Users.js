import AllUsers from "./all_users";
import User from "./User";
export default function Users(){
    let users = AllUsers

    let

    return(<div>
        {users.map(user => <User user={user} key={user.id}/>)}
    </div>)
}
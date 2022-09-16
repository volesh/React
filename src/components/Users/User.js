
export default function User(props){
    let {user, x} = props
    return(<div>
            <div>{user.id} - {user.name}</div>
            <button onClick={()=>{
                x(user)
            }}>Address</button>

        </div>
    )
}
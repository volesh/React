
export default function UserInfo(props){
    let {user} = props

    return(<div>
        <b>Address:</b> <br/> City - {user.address.city} <br/> Street - {user.address.street} <br/> Zipcode - {user.address.zipcode}
    </div>)
}
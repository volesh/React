
export default function UserInfo({user}){
    return(<div className={'user_info'}>
        <h2>{user.id} - {user.name}</h2>
        <p><b>Email</b> - {user.email}</p>
        <p><b>Address:</b> <br/> street - {user.address.street} <br/> City - {user.address.city} <br/> Zipcode - {user.address.zipcode} </p>
        <p><b>Phone</b> - {user.phone}</p>
        <p><b>Website</b> - {user.website}</p>
        <button onClick={() => {

        }}>Click</button>
    </div>)
}
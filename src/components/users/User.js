
export default function User({user}){
    return(<div>
        <div className={'info'}>
            {user.id} - {user.name}
        </div>
        <button className={'button'}>Watch info</button>
    </div>)
}
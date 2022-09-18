
export default function ({user, info}){
    return(<div className={'user_container'}>
        <div className={'user'}>
            {user.id} - {user.name}
        </div>
        <button onClick={() => {
            info(user)
        }} className={'button'}>Click</button>
    </div>)
}
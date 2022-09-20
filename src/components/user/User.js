

const User = ({user, foo, post}) => {
    return (
        <div className={'user'}>
            <h2>{user.id}. {user.name}</h2>
            <button onClick={() => {
                foo(user)
                post(user.id)
            }}>User details</button>
        </div>
    );
};

export {User};
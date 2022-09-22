
const User = ({user}) => {
    return (
        <div>
            <h3>{user.id} - {user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};

export {User};
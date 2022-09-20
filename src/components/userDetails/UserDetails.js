

const UserDetails = ({user, foo}) => {
    return (
        <div>
            <h3>{user.name} -- {user.username}</h3>
            <p>Email - {user.email}</p>
            <p>Phone - {user.phone}</p>
            <p>Website - {user.website}</p>

            <button onClick={()=>{foo()}}>User posts</button>
        </div>
    );
};

export {UserDetails};
export default function UsersPosts({post}){
    return(<div>
        {post.map(post => (
            <div>{post.id} - {post.title}</div>
            )
        )}
    </div>)
}
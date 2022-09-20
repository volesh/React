import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
        </div>
    );
};

export {Post};
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../slices";

const Posts = () => {

    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.postReducer)


    useEffect(()=>{
        const {data} = dispatch(postActions.getAll())
    },[])

    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
    );
};

export {Posts};
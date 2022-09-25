import React, {useEffect, useState} from "react";
import {apiService} from "../../services";
import {useLocation} from "react-router-dom";
import {CommentV2} from "../CommenV2/CommentV2";

const Post = () => {
    let {state} = useLocation();
    let [post, setPost] = useState({})
    let [comments, setCommenst] = useState([])

    useEffect(()=>{
        apiService.getPostById(state.id).then(value => setPost(value.data))
    },[])

    useEffect(()=>{
        apiService.getComments().then(value => setCommenst(value.data.filter(comment=>comment.postId === state.id)))
    },[])

    return (
        <div>
            <h2>Post</h2>
            <p><b>Post title</b> - {post.title}</p>
            <p><b>Post id</b> - {post.id}</p>
            <h2>Post Comments</h2>
            <div>
                {comments.map(coment=><CommentV2 key={coment.id} comment={coment}/>)}
            </div>
        </div>
    );
};

export {Post};
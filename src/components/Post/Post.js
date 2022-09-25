import React, {useEffect, useState} from "react";
import {apiService} from "../../services";
import {useLocation, useParams} from "react-router-dom";
import {CommentV2} from "../CommenV2/CommentV2";

const Post = () => {
    let {id} = useParams()
    let [post, setPost] = useState({})
    let [comments, setCommenst] = useState([])

    useEffect(()=>{
        apiService.getPostById(id).then(value => setPost(value.data))
    },[])

    useEffect(()=>{
        apiService.getCommentsById(id).then(value => setCommenst(value.data))
    },[id])

    return (
        <div>
            <h2>Post</h2>
            <p>{JSON.stringify(post)}</p>
            <h2>Post Comments</h2>
            <div>
                {comments.map(coment=><CommentV2 key={coment.id} comment={coment}/>)}
            </div>
        </div>
    );
};

export {Post};
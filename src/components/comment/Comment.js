import React from "react";
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <Link to={`/post/${comment.postId}`}><h3>{comment.id} - {comment.name}</h3></Link>
            <hr/>
        </div>
    );
};

export {Comment};
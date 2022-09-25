import React from "react";
import {Link} from "react-router-dom";

const CommentV2 = ({comment}) => {
    return (
        <div>
            <h5>{comment.name}</h5>
            <hr/>
        </div>
    );
};

export {CommentV2};
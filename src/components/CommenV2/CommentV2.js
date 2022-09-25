import React from "react";
import {Link} from "react-router-dom";

const CommentV2 = ({comment}) => {
    return (
        <div>
            <p>{JSON.stringify(comment)}</p>
            <hr/>
        </div>
    );
};

export {CommentV2};
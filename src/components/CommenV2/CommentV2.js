import React from "react";
import {Link} from "react-router-dom";

const CommentV2 = ({comment}) => {
    return (
        <div>
            <p>{JSON.stringify(comment)}</p>
            <h3></h3>
            <hr/>
        </div>
    );
};

export {CommentV2};
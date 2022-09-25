import React from "react";

const Album = ({album}) => {
    return (
        <div>
           <h3>{album.title}</h3>
        </div>
    );
};

export {Album};
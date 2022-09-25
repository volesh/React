import React, {useEffect, useState} from "react";
import {apiService} from "../../services";
import {Album} from "../album/Album";

const Albums = () => {
    let [albums, setAlbums] = useState([]);

    useEffect(()=>{
        apiService.getAlbus().then(value => setAlbums(value.data))
    },[])
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};
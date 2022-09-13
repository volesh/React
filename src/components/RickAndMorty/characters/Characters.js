import Character from "../character/Character";
import {useState} from "react";

export default function Characters(){
    let [chars, setChars] = useState([])
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setChars(value.results)
        })
    return(<div className={'rickMorti'}>
        {chars.map((char, index) => (<Character item={char} key={char.id}/>))}
    </div>)
}
export default function Simpsons(props){
    let {name, pic} = props;

    return (<div className={'simpsonsBlock'}>
        <h2>{name}</h2>
        <img src={pic}/>
    </div>)

}
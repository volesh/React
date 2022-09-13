
export default function CreateChar(props){
    let {name, img, gender, status} = props

    return (<div>
        <h2>{name}</h2>
        <p>Gender - {gender} <br/> Status - {status}</p>
        <img src={img}/>
    </div>)
}
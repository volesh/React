

export default function Character(props){
    let {item} = props

    return(<div className={'item'}>
        <h2>{item.id} - {item.name}</h2>
        <p>Gender - {item.gender} <br/>Status - {item.status} <br/>Species - {item.species}</p>
        <img src={item.image}/>
    </div>)

}
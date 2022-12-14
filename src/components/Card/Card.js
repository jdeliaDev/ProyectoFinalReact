export default function Card ({info}) {
    const mostrar =()=>{
        console.log(info)//objeto con la info del personaje
    }

    return(
        <div>
            <img src={info.image} alt={info.name}/>
            <h2> {info.name}</h2>
            <button onClick={mostrar}>Now More..</button>
        </div>
    )
}
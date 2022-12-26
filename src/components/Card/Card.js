
import './Card.css'

export default function Card ({info}) {
    const mostrar =()=>{
        console.log(info)//objeto con la info del personaje
    }

    return(
        <div className="card">
            <img src={info.image} alt={info.name}/>
            <h2 className='text-center'> {info.name}</h2>
            <button className='btn btn-active ms-auto' onClick={mostrar}>Now More..</button>
        </div>
    )
}
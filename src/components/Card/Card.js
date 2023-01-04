import {useState} from 'react';
import './Card.css'

export default function Card ({info}) {
    const[ocultar,setOcultar]=useState(true);

    const mostrar =()=>{
        console.log(info)//objeto con la info del personaje
        setOcultar(false) //nos ayuda a mostrar el contenedor de info
    }

    const ocularInfo=()=>{
        setOcultar(true) //nos ayuda a ocultarlo el contenedor de info
    }

    return(
        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <img src={info.image} alt={info.name}/>
                <h3>{info.name}</h3>

                <button onClick={mostrar} className={ ocultar === true ?"btn btn-active align-self-end":"d-none"}>Now More..</button>  

                {/* puedo o utilizar 
            ocultar? <button onClick={mostrar}>Now More..</button>  :''*/}          
            </div>
            {ocultar ===false?
                <div className='p-5 flex-column align-items-center'>
                    <button className="btn btn-active d-flex align-self-end m-2" onClick={ocularInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item p-3">Character Status {info.status}</li>
                        <li className="list-group-item p-3">
                            Species 
                            <div>{info.species}</div>
                        </li>
                        <li className="list-group-item p-3">
                            Origin 
                            <div>{info.origin.name}</div>
                        </li>
                        <li className="list-group-item p-3">
                            Gender 
                            <div>{info.gender}</div>
                        </li>
                    </ul>
                </div>:''
            }
        </div>
    )
}
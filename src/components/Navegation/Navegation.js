import './Navegation.css'

export default function Navegation() {
    return (  
        <header className="d-flex flex-row align-items-center justify-content-between bg-blue"> 
        <h1 className="tituloNav w-50">Ricky y Morty</h1>   
            <nav className="navbar navbar-expand-lg w-50 ">
                
                <ul className="navbar-nav ms-auto">
                    <li className="btn botones">Home</li>
                    <li className="btn botones btn-active">Characters</li>
                    <li className="btn botones">Contact</li>
                </ul>
            </nav>
        </header>
    );
  }
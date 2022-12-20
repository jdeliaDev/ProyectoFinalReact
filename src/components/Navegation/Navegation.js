import './Navegation.css'

export default function Navegation() {
    return (  
        <header>
            <h1>Ricky y Morty</h1>
            <nav className="navbar w-100 bg-blue">
                <ul className="navbar-nav ms-auto">
                    <li className="btn botones">Home</li>
                    <li className="btn botones btn-active">Characters</li>
                    <li className="btn botones">Contact</li>
                </ul>
            </nav>
        </header>
    );
  }
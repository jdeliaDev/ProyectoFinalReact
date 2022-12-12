import './Navegacion.css'

export default function Navegacion() {
    return (<nav className="navbar">
                <div className="container">
                    <ul class="row nav justify-content-end">
                        <li className="col nav-item">
                            <a className="nav-link active" aria-current="page" href="/index.html">Inicio</a>
                        </li>
                        <li className="col nav-item  position-relative">
                            <button id="productos" className="nav-link">Productos</button>
                            <ul className="nav justify-content-end subMenu" id="subMenu">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/PlantasInterior.html">Plantas Interior</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/PlantasExterior.html">Plantas Exterior</a>
                                </li>
                            </ul>
                        </li>
                        <li className="col nav-item">
                            <a className="nav-link" href="/Presupuesto.html">Presupuesto</a>
                        </li>
                        <li className="col nav-item">
                            <a className="nav-link" href="/Tips.html">Tips</a>
                        </li>
                    </ul>
                </div>
            </nav>    
    );
  }
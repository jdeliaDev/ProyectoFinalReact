import './Home.css'

export default function Home() {
    return (  
        <header className = "principal-search container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className= "container-header d-flex flex-column justify-content-center">
                <h1 className = "row justify-content-center">Proyecto - Rick & Morty</h1>
                <nav className= "row navBar align-items-center">
                    <ul className = "nav justify-content-center">
                        <li className = "btn btn-primary">Characters</li>
                        <li className = "btn btn-primary">Contacts</li>
                    </ul>
                </nav> 
            </div>
        </header>
    )
  }
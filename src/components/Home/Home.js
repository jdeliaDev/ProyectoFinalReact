import './Home.css'

export default function Home() {
    return (  
        <header className = "d-flex flex-column align-items-center justify-content-center">
            <h1 className = "row justify-content-center">Proyecto - Ricky & Morty</h1>
            <nav className= "row navBar align-items-center">
                <ul className = "nav justify-content-center">
                    <li className = "btn btn-primary">Characters</li>
                    <li className = "btn btn-primary">Contacts</li>
                </ul>
            </nav> 
        </header>
    )
  }
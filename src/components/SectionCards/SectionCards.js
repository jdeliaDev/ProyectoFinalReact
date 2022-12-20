import Card from "../Card/Card";
import './SectionCards.css'

export default function SectionCards({datos}) {
 
    return(
        <section className="section-cards row">
            <div className="card m-2 p-2 d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex flex-column align-items-center justify-content-between">
                    {datos.map((dato)=>{return <Card key={dato.id}info={dato}/>})
                            }
                </div>
            </div>
        </section>
    )
  }
export default function Filters({nombreFiltro,datoFiltro,muestraValor}) {

    return(
        <div className="form-check form-switch mx-2 bg-warning">
            <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
            <label className="form-check-label" htmlFor={nombreFiltro}>{nombreFiltro}</label>
        </div>
    )
}
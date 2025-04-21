function Result({resultado, visibilidad}){

    return(

        <p className={`parrafito ${visibilidad ? "mostrar" : ""}`} id="parrafito"> La suma de los 2 números es: <span>{resultado}</span> </p>

    )

}

export default Result;
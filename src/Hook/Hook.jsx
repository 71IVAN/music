import { useState, useEffect } from "react"

export function Hook(){

    //ANTES DEL RETORNO CONFIGURAMOS NUESTRAS VARIABLES DE ESTADO
    const [contador,setContador]=useState(0)

    //PROGRAMANDO EL DETECTOR DE EJECUCIONES 
    useEffect (function(){
        setContador(contador+1)
    },[contador])

    //function para decir que hacer cuando le den click al boton
    function incrementarCuenta(){
       setContador(contador+1)
    }


    return(

        <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={incrementarCuenta}>Click</button>
                    <h2>La cuenta va en: {contador} </h2>
                </div>
            </div>
        </div>
        
        
        </>
    )
}
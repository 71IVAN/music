import { consultarCanciones } from "../services/serviciesCanciones"
import { useState, useEffect } from "react"
export function Music(){
    

    const [canciones, setCanciones]=useState(null)
    const [estacargando, setEstacargando]=useState(true)
    useEffect(function(){

        consultarCanciones().then(function(respuesta) {
           setCanciones(respuesta.tracks)
           setEstacargando(false)
        })
    
        

    },[])
    
    if(estacargando){
        return(
            <>
            <h1>Estoy cargando</h1>
            </>
          )
    }else{
        return (
            <>
            {
                canciones.map(function(cancion){
                    return(
                        <audio controls src={cancion.preview_url}></audio>
                    )
                })
            }
            </>
        )
    }
      
    
}
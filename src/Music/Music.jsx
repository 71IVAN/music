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
                canciones.map(function(cancion) {
                    return (
                    <div key={cancion.id} className="card h-400 w-75 shadow mx-auto g-1">
                        <div className="row g-1">
                        <h6 className="mt-5 text-center">{cancion.name}</h6>
                        <audio className="mt-4" controls src={cancion.preview_url}></audio>
                        <h4 className="mt-3 text-center">{cancion.type}</h4>
                        </div>
                    </div>
                    );
                })
                }

            </>
        )
    }
      
    
}
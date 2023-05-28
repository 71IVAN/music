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
                                            <div key={cancion.id}>
                    <div className="card h-400 w-75 shadow mx-auto g-1 ">
                        <div className="row row-cols1- row-cols-md-2 g-1">
                        <h4 className="mt-3 text-center">{cancion.name}</h4>
                        <h4 className="mt-3 text-center">{cancion.type}</h4>
                        <h4 className="mt-3 text-center">{cancion.uri}</h4>
                        </div>
                        <div className="text-center">
                        <audio className="mt-4" controls src={cancion.preview_url}></audio>
                        </div>
                    </div>
                    </div>
                    )
                })
            }
            </>
        )
    }
      
    
}
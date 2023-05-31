
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
    
    const traerImagen = (track) => {
        let imgs = track?.album?.images;
        return(
            imgs?.length !== 0 && (
                <img 
                key={imgs[1]?.url}
                src={imgs[1]?.url}
                width={imgs[1]?.width}
                height={imgs[1]?.height}
                />
            )
        )
    }

    if(estacargando){
        return(
            <>
            <h1>Estoy cargando</h1>
            </>
          )
    }else{
        return (
            <>
                <div className="row mt-2">
                    {canciones.map(function(cancion) {
                    return (
                        <div key={cancion.id} className="col-6">
                        <div className="card h-500 w-75 shadow mx-auto g-0 mt-5">
                            <div className="row g-1">
                            <h6 className="mt-5 text-center">Nombre: {cancion.name}</h6>
                            {traerImagen(cancion)}
                            <audio className="mt-4" controls src={cancion.preview_url}></audio>
                            <h4 className="mt-3 text-center">Tipo: {cancion.type}</h4>
                            <h5 className="mt-3 text-center">Popularidad: {cancion.popularity}</h5>
                            </div>
                        </div>
                        </div>
                    );
                    })}
                </div>
            </>

        )
    }
      
    
}
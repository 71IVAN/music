
import { consultarCanciones } from "../services/serviciesCanciones";
import { useState, useEffect } from "react";
import { ObtenerToken } from "../services/serviciesCanciones";

export function Music() {

 
  const [canciones, setCanciones] = useState(null)
  const [estacargando, setEstacargando] = useState(true)
  const [token, setToken] = useState(null)



  useEffect(function () {
    ObtenerToken().then(respuesta => {
      setToken(respuesta.access_token)
    })
  }, [])


  useEffect(function () {
    if (token) {
      consultarCanciones(token).then(function (respuesta) {
        console.log(respuesta);
        setCanciones(respuesta.tracks);
        setEstacargando(false)
      })
    }

  }, [token]);

  if (estacargando) {
    return (
      <>
        <h1>ESTA CARGANDO EL CONTENIDO</h1>
      </>
    )

  } else {
    return (
      <>
        <div className="fondo">
          <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {
                canciones.map(function (cancion) {
                  return (

                    <div className="col">
                      <div className="card bg-dark border-info h-100 shadow p-4">
                        <h2 className="text-center text-white ">{cancion.name}</h2>
                        <img src={cancion.album.images[1].url} alt="" />
                        <audio className="w-100 my-2" controls src={cancion.preview_url}></audio>
                        <h3 className=" text-center text-white">Popularidad:<br></br>{cancion.popularity}</h3>
                      </div>


                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}

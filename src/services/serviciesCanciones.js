export async function consultarCanciones(){
  
  //receta para consumir apis con JS
  //1. Para donde vas 
  //URL + EP del servicio 
  const IDARTISTA= "137W8MRPWKqSmrBGDBFSop"
  const URI = ` https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us` 
  const TOKEN = "Bearer BQBN51ZiXFZJnNvsr89Lrnm5OcYbIZYM-Y1Aw81jR5PB_032s37OoX0XIiWk6kdrkCRhG62XQLnDjNvtbOSRqoQCFIhy4lgJYMwWUEw05Py9_-1MYBU"
  
  //2. Que se hara
  //Configurando la peticion 
  let peticion= {
    method: "GET",
    headers: {
      "Authorization": TOKEN
    }
  }
  
  //3. Pedir taxi
  //Utilizar la promesa FETCH para ir al back y consumir el API
  let respuesta = await fetch (URI, peticion)
  let canciones = await respuesta.json()

  return canciones


}
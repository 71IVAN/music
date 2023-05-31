export async function consultarCanciones(){
  
  //receta para consumir apis con JS
  //1. Para donde vas 
  //URL + EP del servicio 
  const IDARTISTA= "137W8MRPWKqSmrBGDBFSop"
  const URI = ` https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us` 
  const TOKEN = "Bearer BQB8MAa0S77AHrBRnH0whIogk10s39egLMcdrPW8Y0dH_XPidtQoDuXdurIsMZmy_cRdfcwpGrB85H9narRypL4q8AKRVWTu_Mh4TWk0xlV9fOZT__M"
  
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
export async function consultarCanciones(){
  
  //receta para consumir apis con JS
  //1. Para donde vas 
  //URL + EP del servicio 
  const IDARTISTA= "246dkjvS1zLTtiykXe5h60"
  const URI = ` https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us` 
  const TOKEN = "Bearer BQAv5qO4mUEOhWPLA2l1fA938MYh8Xmp8LbO0zC9ogNsEw966HqVrCl_4IWPl-yuWOigTY6uY3QEMbbE5GtT6ovQEwnw2Q2DZlneFBhbS3Cp0wsE7UA"
  
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
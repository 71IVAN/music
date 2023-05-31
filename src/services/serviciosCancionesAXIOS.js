/**import axios from "axios"
export async function consultarConAxios(){
   //URI = URL + EP DEL SERVICIO 

   const IDARTISTA= "137W8MRPWKqSmrBGDBFSop"
   const URI =  ` https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`

   const TOKEN = "Bearer BQB8MAa0S77AHrBRnH0whIogk10s39egLMcdrPW8Y0dH_XPidtQoDuXdurIsMZmy_cRdfcwpGrB85H9narRypL4q8AKRVWTu_Mh4TWk0xlV9fOZT__M"
   
   //CONSTRUTO LA PETICION
   const PETICION={
    headers:{"Authorization": TOKEN
    }
   }
   
  

   //ORDENAR MIS RESPUESTA
   try{
    //UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API 
   let respuesta=await axios.get(URI,PETICION)
   let canciones=respuesta.data
   return canciones
    
   }catch(error){
    throw new Error(" Fallamos "+error)
   }

} */
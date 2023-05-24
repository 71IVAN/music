import { Route, Routes,Link } from "react-router-dom"
import { Home } from "../Home/Home"
import {Colaboraciones} from "../Colaboraciones/Colaboraciones"
import { Fans } from "../Fans/Fans"
import {Shop} from "../Shop/Shop"
import { Menu } from "../shared/Menu/Menu"
import { Footer } from "../shared/Footer/Footer"
import { Carga } from "../Hook/Carga"
import { Music } from "../Music/Music"


export function Rutas(){
   return(
      <>

   <Menu/>
   
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/colaboraciones" element={<Colaboraciones />} />
    <Route path="/fans" element={<Fans />} />
    <Route path="/tienda" element={<Shop />} />
    <Route path="/Hook" element={<Carga/>} />
    <Route path="musica" element={<Music/>}/>
    
    </Routes>
    <Footer/>
    </>
   
   )
}
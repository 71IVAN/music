import { Route, Routes,Link } from "react-router-dom"
import { Home } from "../Home/Home"
import {Colaboraciones} from "../Colaboraciones/Colaboraciones"
import { Fans } from "../Fans/Fans"
import {Shop} from "../Shop/Shop"
import { Menu } from "../shared/Menu/Menu"
import { Footer } from "../shared/Footer/Footer"


export function Rutas(){
   return(
      <>

   <Menu/>
   
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/colaboraciones" element={<Colaboraciones />} />
    <Route path="/fans" element={<Fans />} />
    <Route path="/tienda" element={<Shop />} />
    
    </Routes>
    <Footer/>
    </>
   
   )
}
import {Menu} from "../shared/Menu/Menu"
import { History } from "../History/History"
import './Home.css'
export function Home(){
    return(
        <>
          <Menu/> 
           <section className="banner"></section>
           <section><History/></section>
        </>
    )
}
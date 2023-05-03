import { Link } from "react-router-dom"
import './Footer.css'
export function Footer(){
    return(
        <>
        
        <footer className="footer d-flex justify-content-center mt-5">
      <div className="contact-info">
        <h5>Contactar</h5>
        <p>420 Smile<br/>NewYork - USA 12345<br/>Phone: 585-005-441</p>
      </div>

      <div className="social-media">
        <h5>Siguenos en: </h5>
        <ul>
          <li><a href="https://www.facebook.com/postmalone/?locale=es_LA"> <i className="fab fa-facebook"></i>Facebook</a></li>
          <li><a href="https://twitter.com/PostMalone"><i className="fab fa-twitter"></i>Twitter</a></li>
          <li><a href="https://www.instagram.com/postmalone/feed/"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </footer>
  

        
        </>
    )
}
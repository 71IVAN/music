import { Link } from "react-router-dom"
import 'animate.css'
import './Menu.css'
export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary animate__animated animate__bounce ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Post Maolne</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/colaboraciones">Colaboraciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link my-2" to="/tienda">Tienda </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fans">Fans</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Hook">Hook</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/musica">Musica</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

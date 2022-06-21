import React from "react";
import logo from "../../logo.png";
import CartWidget from "../CarWidget/CartWidget";

export default function NavBar() {
  return (
    <div className="bg-dark">
      <header className="text-start">
        <div>
          <div className="logo text-center">
            <img src={logo} alt="logo" className="App-logo" />
          </div>
          <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
              <a className="navbar-brand" >
                Menu
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >
                      Contactos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >
                      Productos
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Redes Sociales
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" >
                          Twiter
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" >
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div><CartWidget /></div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}


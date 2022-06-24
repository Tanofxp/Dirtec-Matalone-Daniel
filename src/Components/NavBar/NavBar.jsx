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
              <spam className="navbar-brand" >
                Menu
              </spam>
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
                    <spam className="nav-link active" aria-current="page" >
                      Login
                    </spam>
                  </li>
                  <li className="nav-item">
                    <spam className="nav-link" >
                      Contactos
                    </spam>
                  </li>
                  <li className="nav-item">
                    <spam className="nav-link" >
                      Productos
                    </spam>
                  </li>
                  <li className="nav-item dropdown">
                    <spam
                      className="nav-link dropdown-toggle"
                      
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Redes Sociales
                    </spam>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <spam className="dropdown-item" >
                          Twiter
                        </spam>
                      </li>
                      <li>
                        <spam className="dropdown-item" >
                          Instagram
                        </spam>
                      </li>
                      <li>
                        <spam className="dropdown-item" >
                          Facebook
                        </spam>
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


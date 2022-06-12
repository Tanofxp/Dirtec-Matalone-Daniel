import React from "react";
import logo from "../logo.png";

const NavBar = () => {
  return (
    <div class="bg-dark">
      <header class="text-start">
        <div>
          <div className="logo" class="text-center">
            <img src={logo} alt="logo" className="App-logo" />
          </div>
          <nav class="navbar navbar-expand-lg bg-info">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Menu
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contactos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Productos
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Redes Sociales
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Twiter
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;

import "../assets/css/App.css";
/* import logo from "../assets/img/oca.png"; */
import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-dark pt-4">
        <div className="container-fluid">
          <h1 className="logo">mi<b>Sueldo</b></h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Extras
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="https://www.camioneros-ba.org.ar/images/joomlart/escalas/escala_agosto2023_1.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Última Escala Salarial
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.camioneros-ba.org.ar/images/joomlart/escalas/escala_agosto2023_1.jpg"
                      >
                       Hoja 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.camioneros-ba.org.ar/images/joomlart/escalas/escala_agosto2023_2.jpg"
                      >
                       Hoja 2
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.camioneros-ba.org.ar/images/joomlart/escalas/Cart_amplia_mayo_211.doc"
                      >
                        Cartilla Ampliatoria 05/2024
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://app.reciboselectronicos.com/"
                  >
                    Recibos de Sueldo
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.camioneros-ba.org.ar/index.php/gremiales/salarios/escalas-salariales"
                  >
                    Escalas Salariales
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.fedcam.org.ar/images/joomlart/AcuerdoSalarialCamioneros2022-comprimido.pdf"
                  >
                    Acuerdo Salarial 2024
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr></hr>
    </>
  );
}

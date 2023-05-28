import "../assets/css/App.css";
import React from "react";
import { useState } from "react";
import Calcu from "./Calcu";

export default function Categorias() {
  const [opcion, setOpcion] = useState(0);
  const [vacaciones, setVacaciones] = useState(false);
  const [vaca, setVaca] = useState(0);

  const manejarVaca = (e) => {
    setVaca(e.target.value);
  };

  const manejarCheckbox = (e) => {
    setVacaciones(e.target.checked);
    if (!e.target.checked) {
        setVaca(0);
      }
    
  };
  
  const manejarRadio = (e) => {
    setOpcion(e.target.value);
  };

  return (
    <>
      <h3>Ingresá tu categoría</h3>
      <br />

      <div class="grid">
        <div class="form-check form-check-inline ">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={145876.55}
            onChange={manejarRadio}
          />
          <label class="form-check-label" for="inlineRadio1">
            Auxiliar de 1ra{" "}
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value={155691.62}
            onChange={manejarRadio}
          />
          <label class="form-check-label" for="inlineRadio2">
            Operador de Serv
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value={141709.48}
            onChange={manejarRadio}
          />
          <label class="form-check-label" for="inlineRadio3">
            Distribuidor
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio4"
            value="option2"
            onclick="otroSueldo()"
          />
          <label class="form-check-label" for="inlineRadio4">
            {" "}
            <b>Otro</b>{" "}
          </label>
        </div>
      </div>
     

     
    <div className="vacaciones mt-5">
      
      <div class="form-check  color-h1">
      
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={vacaciones}
          onChange={manejarCheckbox}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Tuviste vacaciones este mes?
        </label>
      </div>
      <div className={!vacaciones ? "vacas" : "inputVacas"}>
        <div className="form-floating mb-3 ">
          <input
            type="number"
            className="form-control"
            value={vaca}
            onChange={manejarVaca}
          />
          <label for="floatingInput">
            Ingresá dias de vacaciones: (de 0 a 28)
          </label>
          
        </div>
      </div>
      </div>
      <hr></hr>

      <Calcu opcion={opcion} />
      
    </>
  );
}

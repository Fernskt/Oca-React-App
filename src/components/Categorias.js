import "../assets/css/App.css";
import React from "react";
import { useState } from "react";
import Calcu from "./Calcu";

export default function Categorias() {
  const [opcion, setOpcion] = useState(0);
  const [vacaciones, setVacaciones] = useState(false);
  const [vaca, setVaca] = useState(0);
  const [enfermedad ,  setEnfermedad] = useState(false);
  const [enf, setEnf] = useState(0);
 
  const manejarVaca = (e) => {
    setVaca(e.target.value);
  };

  const manejarEnf = (e) => {
    setEnf(e.target.value);
  };

  const manejarCheckboxV = (e) => {
    setVacaciones(e.target.checked);
    if (!e.target.checked) {
        setVaca(0);
      }
    
  };

  const manejarCheckboxE = (e) => {
    setEnfermedad(e.target.checked);
    if (!e.target.checked) {
       setEnf(0);
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
            value={166831.19}
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
            value={178056.16}
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
            value={166525.25}
            onChange={manejarRadio}
          />
          <label class="form-check-label" for="inlineRadio3">
            Admin 1ra
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
          onChange={manejarCheckboxV}
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
            Ingresá días de vacaciones: (de 0 a 28)
          </label>
          
        </div>
      </div>
     <br />
      
      <div class="form-check  color-h1">
      
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={enfermedad}
          onChange={manejarCheckboxE}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Tuviste días por enfermedad?
        </label>
      </div>
      <div className={!enfermedad ? "vacas" : "inputVacas"}>
        <div className="form-floating mb-3 ">
          <input
            type="number"
            className="form-control"
            value={enf}
            onChange={manejarEnf}
          />
          <label for="floatingInput">
            Ingresá cantidad de días (de 0 a 30)
          </label>
          
        </div>
      </div>
      </div>
      <hr></hr>

      <Calcu opcion={opcion}
             vaca={vaca}
             enf={enf} />

    </>
  );
}

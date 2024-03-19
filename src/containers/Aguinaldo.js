import "../assets/css/App.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Aguinaldo() {
  const [mayorSueldo, setMayorSueldo] = useState(0);

  const manejarMayorSueldo = (e) => {
    setMayorSueldo(e.target.value);
  };

  const calcularAguinaldo = () => {
   return (mayorSueldo / 2);  
  };

  const calcularAguinaldoMano = () => {
    const descuento = calcularAguinaldo() * 0.215;
    return calcularAguinaldo() - descuento;
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="contenedor-centrar">
        <div className="py-3 px-5 form-contenedor">
          <h2>Calculá tu aguinaldo</h2>
          <br />
          <br />

          <div>
            <p>
              El aguinaldo se calcula como el 50% del mejor salario devengado
              por el empleado en cada semestre del año. la primera parte se paga
              en junio (que puede extenderse a julio) y la segunda parte en
              diciembre. Para poder calcular el mismo, por favor ingresa a
              continuación tu salario bruto más alto.
            </p>
          </div>
          <div>
            <form className="form-floating formulario">
              <div className="form-floating mb-3 ">
                <input
                  type="number"
                  className="form-control"
                  value={mayorSueldo === 0 ? 'null' : mayorSueldo}
                  onChange={manejarMayorSueldo}
                />
                <label for="floatingInput">
                  Ingresá tu mayor sueldo bruto:
                </label>
              </div>
            </form>
          </div >
          <div className="total">
          <h4>Total bruto: <span className="bruto">${calcularAguinaldo().toFixed(2)}</span></h4>
          <h4>Total Neto: <span className="bruto">${calcularAguinaldoMano().toFixed(2)}</span></h4>
          </div>
         
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

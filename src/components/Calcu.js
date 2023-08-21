import "../assets/css/App.css";
import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";


export default function Calcu({opcion, vaca, enf , dolarOficial}) {
  
  
  
  const [dias, setDias] = useState(30);
  const [anios, setAnios] = useState(0);
  const [horas, setHoras] = useState(0);

  const manejarDias = (e) => {
    setDias(e.target.value);
  };
  const manejarAnios = (e) => {
    setAnios(e.target.value);
  };
  const manejarHoras = (e) => {
    setHoras(e.target.value);
  };

  
  const hora100 = opcion * 0.0104167;
  const dia = opcion / 24;
  const sueldoBasicoACobrar = (opcion / 30) * dias;
  const hora100dia = horas * (hora100 * 1.12);
  const especialidad = sueldoBasicoACobrar * 0.12;
  const promHs = 904.62;
  const vacaciones = vaca * 2908.09;
  const enfermedad = ((parseFloat(opcion) / 30)*1.12)*enf;
  const antiguedad = (sueldoBasicoACobrar + hora100dia + especialidad + promHs + vacaciones) * 0.01 * anios;
  const viatico = dia * 0.184843;
  const comida = dia * 0.368358;
  const viaticoPorMes = viatico * (dias - 6);
  const comidaPorMes = comida * (dias - 6);
  const totalBruto = antiguedad + hora100dia + especialidad + vacaciones + parseFloat(opcion);
  const deducciones = totalBruto * 0.215;
  const totalNeto = (viaticoPorMes + comidaPorMes + totalBruto) - deducciones;
  const dolar = totalNeto / dolarOficial;

  return (
    <>
      <form className="form-floating formulario">
        <div className="form-floating mb-3 ">
          <input
            type="number"
            className="form-control"
            value={dias}
            onChange={manejarDias}
          />
          <label for="floatingInput">
            Ingresá los días trabajados: (de 0 a 30)
          </label>
        </div>
        {dias > 30 || dias < 0 || dias === '' ? (
          <p className="error">Cantidad de días fuera de rango (de 0 a 30)</p>
        ) : (
          <br></br>
        )}

        <div className="form-floating mb-3 ">
          <input
            type="number"
            className="form-control"
            value={anios}
            onChange={manejarAnios}
          />
          <label for="floatingInput">
            Ingresá los años trabajados: (Hasta 50)
          </label>
        </div>
        {anios > 50 || anios < 0 || anios === '' ? (
          <p className="error">Cantidad de años incorrecta (Hasta 50)</p>
        ) : (
          <br></br>
        )}
        <div className="form-floating mb-3 ">
          <input
            type="number"
            className="form-control"
            value={horas}
            onChange={manejarHoras}
          />
          <label for="floatingInput">
            Ingresá cantidad de horas extras al 100%:
          </label>
        </div>
        {horas > 100 || horas < 0 ? (
          <p className="error">Número de horas extras excedido</p>
        ) : (
          <br></br>
        )}
      </form>


          

      {(dias > 30 || dias < 0 || dias === '')||(anios > 50 || anios < 0 || anios === '') ? 
      <h4 className="error">Revisá los campos de arriba</h4> : 
      <>
      <h4>Sueldo en Mano: <span className="bruto">${totalNeto.toFixed(2)}</span></h4>
      <h4>US$<span className="bruto">{dolar.toFixed(1)}</span></h4>
      <p>(Valor del dólar oficial a la fecha: AR${dolarOficial})</p>
      </>}
      

      

      <Modal 
      anios={anios}
      horas={horas}
      dias={dias} 
      totalBruto={totalBruto} 
      totalNeto={totalNeto}
      opcion={opcion}
      antiguedad={antiguedad}
      dia={dia}
      hora100dia={hora100dia}
      viatico={viatico}
      comida={comida}
      sueldoBasicoACobrar={sueldoBasicoACobrar}
      especialidad={especialidad}
      viaticoPorMes={viaticoPorMes}
      comidaPorMes={comidaPorMes}
      deducciones={deducciones}
      vacaciones={vacaciones}
      enfermedad={enfermedad}
       />
    </>
  );
}

import "../assets/css/App.css";
import React from "react";
import { useState , useEffect } from "react";
import Modal from "../components/Modal";
import MostrarTotalSueldo from "./MostrarTotalSueldo";



export default function Calcu({opcion, vaca, enf, aus, dolarOficial, valorVacas, esDiaCam}) {
  
  

  const [dias, setDias] = useState((30 - enf));
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

  const adicCamioneros = 1.12;

 useEffect(()=>{
  setDias(30-enf);
 },[enf, aus])
  
  const hora100 = opcion * 0.0104167;
  const dia = opcion / 24;
  const diaCam = () =>{
    return esDiaCam ? dia * adicCamioneros : 0;
  }
  const ausencia = ((parseFloat(opcion) / 30)*aus)*adicCamioneros;
  const sueldoBasicoACobrar = (opcion / 30) * dias;
  const hora100dia = horas * (hora100 * adicCamioneros );
  const especialidad = sueldoBasicoACobrar * 0.12;
  const promHs = 904.62;
  const vacaciones = vaca * valorVacas;
  const enfermedad = ((parseFloat(opcion) / 24)*adicCamioneros)*enf;
  const antiguedad = ((sueldoBasicoACobrar + hora100dia + especialidad + vacaciones + enfermedad + promHs - ausencia) * 0.01 * anios);
  const viatico = dia * 0.184843;
  const comida = dia * 0.368358;
  const viaticoPorMes = viatico * (24 - enf - aus);
  const comidaPorMes = comida * (24 - enf - aus);
  const adicionalEspecialidad = (viaticoPorMes + comidaPorMes)*0.12;
  const totalBruto = (diaCam() + antiguedad + hora100dia + especialidad + vacaciones + enfermedad + sueldoBasicoACobrar + promHs - ausencia) ;
  const deducciones = totalBruto * 0.215;
  const totalNeto = (viaticoPorMes + comidaPorMes + adicionalEspecialidad + totalBruto) - deducciones;
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
            value={anios === 0 ? 'null' : anios}
            onChange={manejarAnios}
          />
          <label for="floatingInput">
            Ingresá los años trabajados: (Hasta 35)
          </label>
        </div>
        {anios > 35 || anios < 0 || anios === '' ? (
          <p className="error">Cantidad de años incorrecta (Hasta 35)</p>
        ) : (
          <br></br>
        )}
        <div className="form-floating mb-3 ">
          <input
            type="number"
            className="form-control"
            value={horas === 0 ? 'null' : horas}
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
      <MostrarTotalSueldo 
      dias={dias}
      anios={anios}
      totalNeto={totalNeto}
      dolar={dolar}
      dolarOficial={dolarOficial}/>

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
      ausencia={ausencia}
      adicionalEspecialidad={adicionalEspecialidad}
      diaCam = {diaCam()}
       />
    </>
  );
}

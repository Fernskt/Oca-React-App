import '../assets/css/App.css'
import React from "react";
import { useState } from 'react';



export default function Calcu(props) {

  let {opcion} = props;
  
  

  const[dias, setDias] = useState(30)
  const[anios, setAnios] = useState('')
  const[horas, setHoras] = useState('')

  const manejarDias = (e)=>{
    setDias(e.target.value)
  }
  const manejarAnios = (e)=>{
    setAnios(e.target.value)
  }
  const manejarHoras = (e)=>{
    setHoras(e.target.value)
  }

  const hora100 = opcion * 0.0104;
  const dia = opcion / 24;
  const sueldoBasicoACobrar = (opcion / 30) * dias;
  const hora100dia = horas * (hora100 * 1.12);
  const especialidad = sueldoBasicoACobrar * 0.12;
  const promHs = 904.62;
  const antiguedad = ((sueldoBasicoACobrar + hora100dia + especialidad + promHs) * 0.01) * anios;
  const viatico = dia * 0.368358;
  const comida = dia * 0.184843;
  const viaticoPorMes = viatico * (dias - 6);
  const comidaPorMes = comida * (dias - 6);
  const totalBruto = antiguedad + hora100dia + especialidad + parseFloat(opcion);
  const deducciones = totalBruto * 0.215;
  const totalNeto = (viaticoPorMes + comidaPorMes + totalBruto) - deducciones


  return (
    <>
      <form class="form-floating formulario">
        <div className="form-floating mb-3 ">
          <input type="number" className= 'form-control' value={dias} onChange={manejarDias} />
          <label for="floatingInput">Ingresá los días trabajados: (de 0 a 30)</label>
        </div>
        {dias > 30 || dias < 0 ? (
          <p className='error'>Cantidad de días fuera de rango</p>
        ):<br></br>}
        
        <div className="form-floating mb-3 ">
          <input type="number" className="form-control" value={anios} onChange={manejarAnios} />
          <label for="floatingInput">Ingresá los años trabajados: (Hasta 50)</label>
        </div>
        {anios > 50 || anios < 0 ? (
          <p className='error'>Cantidad de años incorrecta</p>
        ):<br></br>}
        <div className="form-floating mb-3 ">
          <input type="number" className="form-control" value={horas} onChange={manejarHoras} />
          <label for="floatingInput">
            Ingresá cantidad de horas extras al 100%:
          </label>
        </div>
        {horas > 100 || horas < 0 ? (
          <p className='error'>Número de horas extras excedido</p>
        ):<br></br>}
      </form>

       
          <h4>Sueldo Bruto:  ${totalBruto.toFixed(2)}</h4>
          <h4>Sueldo en Mano: <span className='bruto'>${totalNeto.toFixed(2)}</span></h4>

      <div class="d-grid gap-2 mt-5 mb-3">
          <button class="btn btn-primary"  disabled={dias > 30 || dias === ''}>Más detalles</button>
          
      </div>

     
  </>
   
  );
}

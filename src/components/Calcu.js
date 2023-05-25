import '../assets/css/App.css'
import React from "react";
import { useState } from 'react';


export default function Calcu(props) {

  let {opcion} = props;

  const[dias, setDias] = useState('')
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


  return (
    <>
      <form class="form-floating formulario">
        <div className="form-floating mb-3 ">
          <input type="number" className= 'form-control' value={dias} onChange={manejarDias} />
          <label for="floatingInput">Ingresá los días trabajados:</label>
        </div>
        {dias > 30 || dias < 0 ? (
          <p className='error'>Cantidad de días fuera de rango</p>
        ):<br></br>}
        
        <div className="form-floating mb-3 ">
          <input type="number" className="form-control" value={anios} onChange={manejarAnios} />
          <label for="floatingInput">Ingresá los años trabajados:</label>
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

         
          <h4>Sueldo bruto:  ${opcion}</h4>
          <h4>Sueldo neto: <span className='bruto'>${opcion}</span></h4>

      <div class="d-grid gap-2 mt-5 mb-3">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onclick="calcularSueldo()" disabled={dias > 30 || dias === ''}>Más detalles</button>
          
      </div>
  </>
   
  );
}

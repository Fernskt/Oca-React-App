import React from 'react'

export default function MostrarTotalSueldo({dias, anios , totalNeto , dolar , dolarOficial}) {
  return (
    <div className='mostrarDatos'>
       {(dias > 30 || dias < 0 || dias === '')||(anios > 50 || anios < 0 || anios === '') ? 
      <h4 className="error">Datos ingresados Incorrectos</h4> : 
      <>
      
      <h4>Neto: <span className="bruto">${totalNeto.toFixed(2)}</span></h4>
      <h4>US$<span className="bruto">{dolar.toFixed(1)}</span></h4>
      </>}
    </div>
  )
}

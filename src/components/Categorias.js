import '../assets/css/App.css'
import React from 'react'
import { useState } from 'react'
import Calcu from './Calcu'



export default function Categorias() {
    const [opcion, setOpcion] = useState(0)

    const manejarRadio = (e)=>{
        setOpcion(e.target.value)
    }

  return (
    <>

          <h3>Ingresá tu categoría</h3><br />

          <div class="grid">
              <div class="form-check form-check-inline ">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                      value={145876.55} checked={opcion === 145876.55} onChange={manejarRadio} />
                  <label class="form-check-label" for="inlineRadio1">Auxiliar de 1ra </label>
              </div>

              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                      value={155691.62} checked={opcion === 155691.62} onChange={manejarRadio} />
                  <label class="form-check-label" for="inlineRadio2">Operador de Serv</label>
              </div>

              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                      value={141709.48} checked={opcion === 141709.48} onChange={manejarRadio} />
                  <label class="form-check-label" for="inlineRadio3">Distribuidor</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
                      value="option2" onclick="otroSueldo()" />
                  <label class="form-check-label" for="inlineRadio4"> <b>Otro</b> </label>
              </div>
          </div>
          <div id="sueldoBase">

          </div>
          <div class="form-check mt-5 color-h1">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="tieneVacas()" />
              <label class="form-check-label" for="flexCheckDefault">
                  Tuviste vacaciones este mes?
              </label>
          </div>
          <div id="tieneVacaciones">

          </div>
          <hr></hr>
          <Calcu opcion={opcion} />
      </>

  )
}

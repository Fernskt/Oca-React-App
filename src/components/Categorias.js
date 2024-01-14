import "../assets/css/App.css";
import React from "react";
import { useState , useEffect } from "react";
import Calcu from "./Calcu";
import axios from 'axios';


export default function Categorias() {

  const [dolarCompra, setDolarCompra] = useState(0);
  
  useEffect(() => {
    let dolarOficial = async ()=>{
    try{
      
          const resultado = await axios.get("https://dolarapi.com/v1/dolares/blue");
          setDolarCompra(resultado.data.venta);
      }catch(error){
        console.error("Error fetching data: ", error);
    }    
  }
    dolarOficial();
  },[]);

  const [sueldosBasicos, setSueldosBasicos] = useState([298425.46,238568.60,208538.99]);
  const [valorSelect, setValorSelect] = useState("1");
  const [opcion, setOpcion] = useState(0);
  const [vacaciones, setVacaciones] = useState(false);
  const [vaca, setVaca] = useState(0);
  const [valorVacas, setValorVacas] = useState(6992.24);
  const [enfermedad ,  setEnfermedad] = useState(false);
  const [enf, setEnf] = useState(0);
  const [esDiaCam , setEsDiaCam] = useState(false);

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

  const manejarCheckboxEsDisCam = (e) => {
    setEsDiaCam(e.target.checked);
    console.log(esDiaCam)
  }

  const manejarRadio = (e) => {
    setOpcion(e.target.value);
  };

  const manejarSelect =(e) => {
    const selectedValue = e.target.value;
    setValorSelect(selectedValue);
  
  switch(selectedValue){
    case "1":
      setSueldosBasicos([298425.46,318504.55,297878.21]);
      setValorVacas(6992,24);
      break;
    case "2":
      setSueldosBasicos([238568.60,254620.31,238131.11]);
      setValorVacas(5589.77);
      break;
    case "3":
      setSueldosBasicos([208538.99,222570.20,208156.56]);
      setValorVacas(4886.16);
      break;
    default:
      setSueldosBasicos([298425.46,318504.55,297878.21]);
      setValorVacas(6992,24);
  }
}

  return (
    <>
    <select class="form-select " aria-label="Default select example" onChange={manejarSelect} value={valorSelect}>
    <option value="1">Escala Corresp a Enero 2024</option>
    <option value="2">Escala Corresp a Noviembre 2023</option>
    <option value="3">Escala Corresp a Septiembre 2023</option>
  </select>
  <h5 class="mb-5">Sueldo Básico (aux 1ra): <span className="bruto">${sueldosBasicos[0].toFixed(2)}</span></h5>
      <h3>Ingresá tu categoría</h3>
      <br />

      <div class="grid">
        <div class="form-check form-check-inline ">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={sueldosBasicos[0]}
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
            value={sueldosBasicos[1]}
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
            value={sueldosBasicos[2]}
            onChange={manejarRadio}
          />
          <label class="form-check-label" for="inlineRadio3">
            Admin 1ra
          </label>
        </div>
        <div class="form-check  color-h1">
      
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        checked={esDiaCam}
        onChange={manejarCheckboxEsDisCam}
      />
      <label class="form-check-label" for="flexCheckDefault">
        Día del Cam.
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
             enf={enf}
             dolarOficial={dolarCompra}
             valorVacas={valorVacas}
             esDiaCam={esDiaCam}/>
             
   
    </>
  );
}

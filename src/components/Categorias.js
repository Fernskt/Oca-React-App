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

  const [sueldosBasicos, setSueldosBasicos] = useState([505413.36,539419.30,504486.54]);
  const [valorSelect, setValorSelect] = useState("1");
  const [opcion, setOpcion] = useState(0);
  const [vacaciones, setVacaciones] = useState(false);
  const [vaca, setVaca] = useState(0);
  const [valorVacas, setValorVacas] = useState(6992.24);
  const [enfermedad ,  setEnfermedad] = useState(false);
  const [enf, setEnf] = useState(0);
  const [ausencia ,  setAusencia] = useState(false);
  const [aus, setAus] = useState(0);
  const [esDiaCam , setEsDiaCam] = useState(false);

  const manejarVaca = (e) => {
    setVaca(e.target.value);
  };

  const manejarEnf = (e) => {
    setEnf(e.target.value);
  };
  const manejarAus = (e) => {
    setAus(e.target.value);
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

  const manejarCheckboxA = (e) => {
    setAusencia(e.target.checked);
    if (!e.target.checked) {
       setAus(0);
      }  
  };

  const manejarCheckboxEsDisCam = (e) => {
    setEsDiaCam(e.target.checked);
  }

  const manejarRadio = (e) => {
    setOpcion(e.target.value);
  };

  const manejarSelect = (e) => {
    const selectedValue = e.target.value;
    setValorSelect(selectedValue);

  switch(selectedValue){
    case "1":
      setSueldosBasicos([505413.36,539419.30,504486.54]);
      setValorVacas(10208.68);
      break;
    case "2":
      setSueldosBasicos([435701.18,465016.64,434902.19]);
      setValorVacas(11842.06);
      break;
    case "3":
      setSueldosBasicos([348560.94,372013.31,347921.75]);
      setValorVacas(8166.94);
      break;
    case "4":
      setSueldosBasicos([298425.46,318504.55,297878.21]);
      setValorVacas(6992.24);
      break;
    default:
      setSueldosBasicos([505413.36,539419.30,504486.54]);
      setValorVacas(11842.06);
  }
}

useEffect(()=>{
  setOpcion(sueldosBasicos[0]);
  
},[sueldosBasicos]);

  return (
    <>
    <select className="form-select " aria-label="Default select example" onChange={manejarSelect} value={valorSelect}>
    <option value="1">Escala Corresp a Abril 2024</option>
    <option value="2">Escala Corresp a Marzo 2024</option>
    <option value="3">Escala Corresp a Febrero 2023</option>
    <option value="4">Escala Corresp a Enero 2023</option>
  </select>
  <h5 className="mb-5">Sueldo Básico (aux 1ra): <span className="bruto">${sueldosBasicos[0].toFixed(2)}</span></h5>
      <h3>Ingresá tu categoría</h3>
      <br />
      

      <div className="grid">
        <div className="form-check form-check-inline ">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={sueldosBasicos[0]}
            onChange={manejarRadio}
            defaultChecked
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Auxiliar de 1ra{" "}
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value={sueldosBasicos[1]}
            onChange={manejarRadio}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Operador de Serv
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value={sueldosBasicos[2]}
            onChange={manejarRadio}
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Admin 1ra
          </label>
        </div>

        
        <div className="form-check  color-h1">
      
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        checked={esDiaCam}
        onChange={manejarCheckboxEsDisCam}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Día del Cam.
      </label>
    </div>
      </div>
     

     
    <div className="vacaciones mt-5">
      
      <div className="form-check  color-h1">
      
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={vacaciones}
          onChange={manejarCheckboxV}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
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
          <label htmlFor="floatingInput">
            Ingresá días de vacaciones: (de 0 a 28)
          </label>
          
        </div>
      </div>
     <br />
    
      
      <div className="form-check  color-h1">
      
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={enfermedad}
          onChange={manejarCheckboxE}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Tuviste faltas justificadas y/o feriado?
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
          <label htmlFor="floatingInput">
            Cuántas? (de 0 a 30)
          </label>
          
        </div>
      </div>
      <br />

      <div className="form-check  color-h1">
      
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={ausencia}
          onChange={manejarCheckboxA}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Tuviste Ausencias c/aviso?
        </label>
      </div>
      <div className={!ausencia ? "vacas" : "inputVacas"}>
        <div className="form-floating mb-3 ">
          <input
            type="number"
            className="form-control"
            value={aus}
            onChange={manejarAus}
          />
          <label htmlFor="floatingInput">
            Cuántas? (de 0 a 30)
          </label>
          
        </div>
       
      </div>
      
      </div>
      <hr></hr>

      
      
      <Calcu opcion={opcion}
             vaca={vaca}
             enf={enf}
             aus={aus}
             dolarOficial={dolarCompra}
             valorVacas={valorVacas}
             esDiaCam={esDiaCam}/>
             
   
    </>
  );
}

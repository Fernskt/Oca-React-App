import "../assets/css/App.css";
import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Faq() {
  const [valorSelectGuardias, setValorSelectGuardias] = useState(0);
  const [cantHoras, setCantidadHoras] = useState(0);
  const [isCheck, setIsCheck] = useState(false);
  const [viaticoYComida, setViaticoYComida] = useState(0);

  const manejarSelectGuardias = (e) => {
    const selectedValue = Number(e.target.value);
    setValorSelectGuardias(selectedValue);
  };

  const manejarCantHoras = (e) => {
    let selectedValue = Number(e.target.value);

    setCantidadHoras((prevSum) => prevSum + selectedValue);
  };

  const [opcion, setOpcion] = useState(505413.36);

  const manejarRadio = (e) => {
    setOpcion(e.target.value);
  };

  const dia = opcion / 24;
  const viatico = dia * 0.184843;
  const comida = dia * 0.368358;

  const manejarCheck = (e) => {
    setIsCheck(e.target.checked);

    if (!isCheck) {
      const resultado = viatico + comida;
      setViaticoYComida(resultado);
    } else {
      setViaticoYComida(0);
    }
  };
  


  const adicCamioneros = 1.14;
  const hora100 = (opcion * 0.0104167);
  const hora100dia = cantHoras * (hora100 * adicCamioneros) + viaticoYComida * valorSelectGuardias;
  const guardia6 = 6 * (hora100 * adicCamioneros) + viaticoYComida;
  const guardia7 = 7 * (hora100 * adicCamioneros) + viaticoYComida;
  const guardia8 = 8 * (hora100 * adicCamioneros) + viaticoYComida;

  const resetear = () => {
    setValorSelectGuardias(0);
    setCantidadHoras(0);
  };

  return (
    <div className="contenedorPrincipal">
      <NavBar></NavBar>
      <div className="contenedor-centrar guardias">
        <div className="py-3 px-5 form-contenedor">
          <h2 className="mb-5">Guardias y Horas extra </h2>

          <h4>Ingresá tu categoría</h4>
          <br />

          <div className="grid">
            <div className="form-check form-check-inline ">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={505413.36}
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
                value={539419.30}
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
                value={504486.54}
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
                checked={isCheck}
                onChange={manejarCheck}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Viático y Com.
              </label>
            </div>
          </div>

          <div>
            <form className="form formulario">
              <label for="numeroGuardias">Número de guardias este mes: </label>
              <select
                className="my-4 mx-2"
                id="numeroGuardias"
                name="numeroGuardias"
                onChange={manejarSelectGuardias}
                required
              >
                <option value="0">Selecciona...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <h5 className="my-4">Ingresá la duración de cada guardia:</h5>

              {[...Array(valorSelectGuardias)].map((_, index) => (
                <div key={index}>
                  <label htmlFor={`guardia${index + 1}`}>
                    {index + 1}° Guardia (horas):
                  </label>
                  <input
                    className="m-1"
                    type="number"
                    id={`guardia${index + 1}`}
                    name={`guardia${index + 1}`}
                    min="6"
                    max="8"
                    onChange={manejarCantHoras}
                    required
                  />
                  <br />
                </div>
              ))}
            </form>
          </div>

          <button
            type="button"
            class="btn btn-primary mt-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Calcular!
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Resultado:
                  </h1>
                  <button
                    onClick={resetear}
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h5>
                    {" "}
                    Total Guardias a cobrar:{" "}
                    <b className="bruto">
                      {" "}
                      $<span>{hora100dia.toFixed(2)}</span>
                    </b>
                  </h5>{" "}
                  <br />
                  <br />
                  Valor Guardia de 6 horas:{" "}
                  <b>
                    {" "}
                    $<span>{guardia6.toFixed(2)}</span>
                  </b>{" "}
                  <br />
                  <br />
                  Valor Guardia de 7 horas:{" "}
                  <b>
                    {" "}
                    $<span>{guardia7.toFixed(2)}</span>
                  </b>{" "}
                  <br />
                  <br />
                  Valor Guardia de 8 horas:{" "}
                  <b>
                    {" "}
                    $<span>{guardia8.toFixed(2)}</span>
                  </b>{" "}
                  <br />
                  <br />
                </div>
                <div class="modal-footer">
                  <button
                    onClick={resetear}
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="py-3 px-5 form-contenedor">
        <h2>Preguntas Frecuentes</h2><br />
        

        <div class="accordion " id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <p>Cuántos días por vacaciones me corresponden?</p>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Según la Ley de Contrato de Trabajo en Argentina, el período mínimo de vacaciones anuales para un empleado con un año completo de antigüedad es de 14 días hábiles.

A medida que aumenta tu antigüedad, la cantidad de días de vacaciones puede incrementarse. Aquí hay una guía general de cómo se calculan las vacaciones en Argentina:
<ul>
<li>1 año de antigüedad: 14 días hábiles de vacaciones.</li>
<li>5 a 10 años de antigüedad: 21 días hábiles de vacaciones.</li>
<li>+10 años de antigüedad: 28 días hábiles de vacaciones.</li>


</ul>

      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <p>Cómo se calcula la hora extra al 100?</p>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <strong>La hora extra al 100</strong> <p>Se calcula el valor de la hora extra y se le suma un 12% adicional.</p><br /><br />

        <h5>Fórmula: (Hora extra + 12%)</h5>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <p>Cómo calculo la bonificación por Especialidad</p>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>La bonificación por especialidad</strong> <p>equivale al 12% del sueldo bruto.</p><br /><br />

        <h5>Fórmula: (Sueldo bruto x 12%)</h5>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <p>Cómo se lo que me corresponde cobrar por vacaciones?</p> 
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>El Adicional por vacaciones</strong> <p>Se calcula multiplicando el valor diario de vacaciones por la cantidad de días de vacaciones.</p><br /><br />

        <h5>Fórmula: (Días de vacaciones × Valor diario de vacaciones)</h5>

      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <p>Cómo sé lo que me corresponde cobrar por días de enfermedad?</p>.
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Días por Enfermedad: </strong> <p>Para calcular la compensación por días de licencia por enfermedad, tomamos el sueldo básico dividido por 30, le sumamos un 12%, y luego multiplicamos el resultado por la cantidad de días por enfermedad.</p><br /><br />

        <h5>Fórmula: ((Sueldo Básico / 30) + 12%) x Cantidad de días por Enfermedad</h5>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <p>Cómo se calcula la Antigüedad?</p>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>La Antiguedad</strong> <p>Se calcula como el 1% del sueldo bruto (sin contar la antigüedad), y se multiplica por la cantidad de años trabajados.</p><br /><br />

        <h5>Fórmula: (Sueldo bruto x 1%) x Cantidad de años trabajados</h5>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
        <p>Deducciones</p>
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Se resta el 21.5% del sueldo bruto al sueldo neto.</strong> <br /><br />

        <h5>Fórmula: Sueldo Neto - (Sueldo Bruto x 21.5%)</h5>

      </div>
    </div>
  </div>
</div>
        </div> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

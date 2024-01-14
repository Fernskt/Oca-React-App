import "../assets/css/App.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Faq() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="contenedor-centrar ">
      
        <div className="py-3 px-5 form-contenedor">
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
        </div>
     
      </div>
      <Footer></Footer>
    </div>
  );
}

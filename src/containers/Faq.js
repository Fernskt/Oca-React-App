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
        <h3>(Próximamente!!!)</h3>

        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Cuántos días por vacaciones me corresponden?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Según la Ley de Contrato de Trabajo en Argentina, el período mínimo de vacaciones anuales para un empleado con un año completo de antigüedad es de 14 días hábiles.

A medida que aumenta tu antigüedad, la cantidad de días de vacaciones puede incrementarse. Aquí hay una guía general de cómo se calculan las vacaciones en Argentina:
<ul>
<li>1 año de antigüedad: 14 días hábiles de vacaciones.</li>
<li>5 años de antigüedad: 21 días hábiles de vacaciones.</li>
<li>10 años de antigüedad: 28 días hábiles de vacaciones.</li>


</ul>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Cuándo se realiza cierre de mes?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Que me corresponde cobrar por dia por enfermedad?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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

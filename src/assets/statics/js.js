function tieneVacas() {
    const tieneVacaciones = document.getElementById("flexCheckDefault").checked;
    if (tieneVacaciones) {
        console.log("Vacaciones Checked!")
        document.getElementById("tieneVacaciones").innerHTML = "<div class='form-floating mt-2'><input type='number' class='form-control' id='tieneVacas' placeholder='30'><label for='floatingInput'>Ingresá la cantidad de días de vacaciones:</label></div>"
    } else {
        document.getElementById("tieneVacaciones").innerHTML = ""
    }
}
function otroSueldo(){
    
    const adm1 = document.getElementById("inlineRadio4").checked;
    if (adm1) {
        document.getElementById("sueldoBase").innerHTML = "<div class='form-floating mt-2'><input type='number' class='form-control' id='sueldoBasi' placeholder='30'><label for='floatingInput'>Ingresá sueldo básico:</label></div>"       
} 
}
function noCheckOtro(){
    document.getElementById("sueldoBase").innerHTML = ""
}




function calcularSueldo() {
    let sueldoBasico = 0/* = parseFloat(document.querySelector("#sueldoBasico").value); */
    const diasTrabajados = parseFloat(document.querySelector("#diasTrabajados").value);
    const aniosTrabajados = parseFloat(document.querySelector("#aniosTrabajados").value);
    const cantidadHoras100 = parseFloat(document.querySelector("#cantidadHoras100").value);
    const auxiliar1 = document.getElementById("inlineRadio1").checked;
    const operador = document.getElementById("inlineRadio2").checked;
    const distribuidor = document.getElementById("inlineRadio3").checked;
    const adm1 = document.getElementById("inlineRadio4").checked;



    if (auxiliar1) {
        sueldoBasico = 124115.96;
    } else if (operador) {
        sueldoBasico = 132466.90;
    } else if (distribuidor) {
        sueldoBasico = 120570.50;
    } else if (adm1){
        sueldoBasico = parseFloat(document.querySelector("#sueldoBasi").value);
    } else {
        alert("Debes seleccionar tu categoría!")
        return;
    }

    

    /*  Vacaciones = 2908.09 */

    const hora100 = sueldoBasico * 0.0104;
    const hora50 = 0;
    const dia = sueldoBasico / 24;
    const sueldoBasicoACobrar = (sueldoBasico / 30) * diasTrabajados
    const hora100dia = cantidadHoras100 * (hora100 * 1.12)
    const especialidad = sueldoBasicoACobrar * 0.12
    const promHs = 904.62
    const antiguedad = ((sueldoBasicoACobrar + hora100dia + especialidad + promHs) * 0.01) * aniosTrabajados;
    const viatico = dia * 0.368358;
    const comida = dia * 0.184843;
    const viaticoPorMes = viatico * (diasTrabajados - 6)
    const comidaPorMes = comida * (diasTrabajados - 6)
    const totalBruto = antiguedad + sueldoBasico + hora100dia + especialidad
    const deducciones = totalBruto * 0.215


    document.getElementById("sueldoBasico").innerHTML = sueldoBasico.toFixed(2);
    document.getElementById("antiguedad").innerHTML = antiguedad.toFixed(2);
    document.getElementById("dia").innerHTML = dia.toFixed(2);
    document.getElementById("sueldoBasicoACobrar").innerHTML = sueldoBasicoACobrar.toFixed(2);
    document.getElementById("hora100dia").innerHTML = hora100dia.toFixed(2);
    document.getElementById("viatico").innerHTML = viatico.toFixed(2);
    document.getElementById("comida").innerHTML = comida.toFixed(2);
    document.getElementById("especialidad").innerHTML = especialidad.toFixed(2);
    document.getElementById("totalBruto").innerHTML = totalBruto.toFixed(2);
    document.getElementById("deducciones").innerHTML = deducciones.toFixed(2);
    document.getElementById("viaticoPorMes").innerHTML = viaticoPorMes.toFixed(2);
    document.getElementById("comidaPorMes").innerHTML = comidaPorMes.toFixed(2);

    const tieneVacaciones = document.getElementById("flexCheckDefault").checked;

    if (tieneVacaciones) {
        console.log("Felices Vacaciones!")
        document.getElementById("vaca").innerHTML = "Adicional por vacaciones: <b> $<span id='vacaciones'></span></b> <br><br>"
        const diasVacaciones = parseFloat(document.querySelector("#tieneVacas").value);
        let vacaciones = diasVacaciones * 2908.09;
        document.getElementById("vacaciones").innerHTML = vacaciones.toFixed(2);
        const totalNeto = (viaticoPorMes + comidaPorMes + totalBruto + vacaciones) - deducciones
        document.getElementById("totalNeto").innerHTML = totalNeto.toFixed(2);

        /*  */
        /*document.getElementById("vacaciones").innerHTML = vacaciones.toFixed(2);*/
    } else {
        console.log("No tiene vacaciones :(")
        document.getElementById("vaca").innerHTML = ""
        const totalNeto = (viaticoPorMes + comidaPorMes + totalBruto) - deducciones
        document.getElementById("totalNeto").innerHTML = totalNeto.toFixed(2);
    }
}


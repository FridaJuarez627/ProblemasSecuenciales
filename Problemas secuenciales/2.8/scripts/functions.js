function calcularTiempo() {
    let kilometros = parseFloat(document.getElementById("num1").value);
    let velocidad = parseFloat(document.getElementById("num2").value);

    let horas = kilometros / velocidad;

    document.getElementById("resultado").textContent ="Tiempo estimado: " + horas + " horas";
}
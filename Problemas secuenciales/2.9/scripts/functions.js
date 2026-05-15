function calcularLlamada() {
    let duracion = parseFloat(document.getElementById("num1").value);
    let costoMinuto = parseFloat(document.getElementById("num2").value);

    let totalPagar = duracion * costoMinuto;

    document.getElementById("resultado").textContent = "Monto de la llamada: $" + totalPagar;
}
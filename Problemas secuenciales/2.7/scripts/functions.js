function calcularBoleto() {
    let distancia = parseFloat(document.getElementById("num1").value);
    let tarifa = parseFloat(document.getElementById("num2").value);

    let importe = distancia * tarifa;

    document.getElementById("resultado").textContent = "Costo del viaje: $" + importe;
}
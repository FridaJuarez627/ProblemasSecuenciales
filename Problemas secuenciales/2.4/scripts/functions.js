function calcularPago() {
    let tiempo = parseFloat(document.getElementById("num1").value);
    let tarifa = parseFloat(document.getElementById("num2").value);

    let horasCobradas = Math.ceil(tiempo);

    let pagoTotal = horasCobradas * tarifa;

    document.getElementById("resultado").textContent = "Importe a pagar: $" + pagoTotal;
}
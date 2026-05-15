function calcularAgua() {
    let consumo = parseFloat(document.getElementById("num1").value);
    let precio = parseFloat(document.getElementById("num2").value);

    let pago = consumo * precio;

    document.getElementById("resultado").textContent = "Pago total de agua: $" + pago;
}
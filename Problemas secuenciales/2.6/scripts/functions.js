function calcularHipotenusa() {
    let cateto1 = parseFloat(document.getElementById("num1").value);
    let cateto2 = parseFloat(document.getElementById("num2").value);

    let hipotenusa = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2));

    document.getElementById("resultado").textContent = "Hipotenusa: " + hipotenusa;
}
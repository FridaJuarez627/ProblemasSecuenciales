function convertir() {
    let pesos = parseFloat(document.getElementById("num1").value);
    let tipoCambio = parseFloat(document.getElementById("num2").value);

    let dolares = pesos / tipoCambio;

    document.getElementById("resultado").textContent = "Dolares obtenidos: " + dolares;
}
function calcularEdad() {
    let nacimiento = parseFloat(document.getElementById("num1").value);
    let anioActual = 2026;
    let edad = anioActual - nacimiento;

    document.getElementById("resultado").textContent = "Edad aproximada: " + edad + " años";
}
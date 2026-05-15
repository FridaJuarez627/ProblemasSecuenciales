function generarPresupuesto() {
    let superficie = parseFloat(document.getElementById("num1").value);
    let precioMetro = parseFloat(document.getElementById("num2").value);

    let presupuesto = superficie * precioMetro;

    document.getElementById("resultado").textContent ="Costo estimado: $" + presupuesto;
}
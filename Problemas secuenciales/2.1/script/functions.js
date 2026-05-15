function Calcular() {

    let baseTriangulo = parseFloat(document.getElementById("num1").value);
    let alturaTriangulo = parseFloat(document.getElementById("num2").value);
   
    let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

    document.getElementById("result").textContent = "Area calculada:" + areaTriangulo;

}
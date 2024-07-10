function calcularAreaTriangulo(base, altura) {
    var area = (base * altura) / 2;
    return area;
}
var base = 5;
var altura = 7;
var areaDoTriangulo = calcularAreaTriangulo(base, altura);
console.log("A área do triângulo com base", base, "e altura", altura, "é", areaDoTriangulo);
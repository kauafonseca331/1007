function calcularArea(largura, altura) {
    if (typeof largura !== 'number' || typeof altura !== 'number' || largura <= 0 || altura <= 0) {
        return "Dimensões inválidas. Por favor, forneça números positivos para largura e altura.";
    }
    const area = largura * altura;
    return area;
}
console.log(calcularArea(5, 10));
console.log(calcularArea(-5, 10));
console.log(calcularArea(5, 'dez')); 
console.log(calcularArea(0, 10)); 
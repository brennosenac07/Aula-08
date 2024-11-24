/**
 * A função desse código é calcular o preço de um produto após aplicar um desconto.
 * @param {*} precoOriginal 
 * @param {*} desconto 
 * @Exemplo
 * Exemplo (100); = 90
 */ 
var calcularDesconto = (precoOriginal, desconto) => precoOriginal - (precoOriginal * desconto / 100);

console.log(calcularDesconto(100, 10));  
console.log(calcularDesconto(250, 20));  

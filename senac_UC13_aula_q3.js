/**
 * Essa função fala, se um número é par ou impar
 * @param {*} numero 
 * @exemplo
 * Exemplo (1); "Ímpar"
 */
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(parOuImpar(10));  
console.log(parOuImpar(15));  
console.log(parOuImpar(22));  

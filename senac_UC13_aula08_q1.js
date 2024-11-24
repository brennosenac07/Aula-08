/**
 * A função verifica se a pessoa é maior ou menor de idade
 * @param {*} idade 
 * @exemplo
 * (>20); "Maior de idade"
 */
function verificarIdade(idade) {
    return idade < 18 ? "Menor de idade" : "Maior de idade";
}


console.log(verificarIdade(15));  
console.log(verificarIdade(18));  
console.log(verificarIdade(20));  

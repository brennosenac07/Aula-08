/**
 * A função fala um número de 1 a 7 para o nome correspondente do dia da semana.
 * @param {*} numero 
 * @exemplo
 * Exemplo (4); "Quarta feira"
 */
function definirDiaDaSemana(numero) {
    var dias = {
        1: "Domingo",
        2: "Segunda feira",
        3: "Terça feira",
        4: "Quarta feira",
        5: "Quinta feira",
        6: "Sexta feira",
        7: "Sábado"
    };

    return dias[numero] || "Número inválido";
}

console.log(definirDiaDaSemana(3));  
console.log(definirDiaDaSemana(7));  
console.log(definirDiaDaSemana(8));  

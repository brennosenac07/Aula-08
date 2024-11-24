/**
 * Essa função fala se um usuário pode entrar no sistema ou não
 * 
 * @param {*} usuario 
 * @Exemplo
 * Exemplo (21); Pode acessar. 
 */
function podeAcessar(usuario) {
    return (usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked;
}

console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); 
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));   

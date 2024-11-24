# Exercicio 1

1. **Verificar Idade**

A função recebe um parâmetro idade e utiliza um operador ternário para verificar se a idade é menor que 18.
Se a idade for menor que 18, retorna a string "Menor de idade".
Caso contrário, retorna "Maior de idade".

*Exemplos*
Quando o parâmetro é 15, a função retorna "Menor de idade".
Quando o parâmetro é 20, a função retorna "Maior de idade".


# Exercicio 2 

2. **Dias da semana**

A função recebe um número numero como parâmetro.
Ela utiliza um objeto dias onde as chaves (1 a 7) representam os dias da semana.
Se o número fornecido estiver entre 1 e 7, retorna o nome do dia correspondente.
Caso o número seja diferente de 1 a 7, retorna "Número inválido".

*Exemplos*
Quando o parâmetro é 4, a função retorna "Quarta feira".
Quando o parâmetro é 7, a função retorna "Sábado".
Quando o parâmetro é 8, que é um número inválido, a função retorna "Número inválido".

# Exercicio 3

3.**Verificar se um número é impar ou par**

A função recebe um número como parâmetro e verifica se ele é divisível por 2 (usando o operador módulo %).
Se o número for divisível por 2 (ou seja, se o resto da divisão for 0), retorna a string "Par".
Caso contrário, retorna "Ímpar".

*Exemplos*

Quando o parâmetro é 10, a função retorna "Par" 
Quando o parâmetro é 1, a função retorna "Ímpar" 

# Exercicio 4

4. **Acessar um sistema**

A função recebe um objeto usuario com três propriedades: idade, isAdmin (um valor booleano indicando se o usuário é administrador) e isBlocked (um valor booleano indicando se a conta está bloqueada).
A função verifica duas condições:
Se a idade do usuário for maior que 18 ou se ele for um isAdmin (administrador).
Se a conta do usuário não estiver bloqueada (!usuario.isBlocked).
Se ambas as condições forem verdadeiras, o usuário pode acessar o sistema e a função retorna true. Caso contrário, retorna false.

*Exemplos*

Quando o parâmetro é { idade: 21, isAdmin: false, isBlocked: false }, o usuário tem mais de 18 anos, não é administrador, e sua conta não está bloqueada, então ele pode acessar o sistema e a função retorna true.
Quando o parâmetro é { idade: 16, isAdmin: true, isBlocked: true }, o usuário é administrador, mas sua conta está bloqueada, então ele não pode acessar o sistema e a função retorna false.

# Exercicio 5

5. **Calcular Desconto**

A função recebe dois parâmetros:
precoOriginal: O preço inicial do produto.
desconto: A porcentagem de desconto a ser aplicada ao preço original.
O cálculo do preço final é feito subtraindo o valor do desconto do preço original:
O desconto é calculado multiplicando o preço original pela porcentagem do desconto dividida por 100.
O resultado é o preço do produto após o desconto ser aplicado.

*Exemplos*

Quando o parâmetro é precoOriginal = 100 e desconto = 10, o preço final após o desconto é 90 (10% de 100 = 10, então 100 - 10 = 90).
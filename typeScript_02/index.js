"use strict";
/*1. Trabalhando com Tipos:
Crie variáveis para cada tipo básico e imprima - as.Tente atribuir valores incorretos a essas variáveis para ver o que acontece.*/
// Tipos básicos
let nome = "João";
let idade = 30;
let ativo = true;
// Tentando atribuir valores incorretos
// nome = 10; // Erro: tipo 'number' não pode ser atribuído a 'string'
// idade = "trinta"; // Erro: tipo 'string' não pode ser atribuído a 'number'
// ativo = "sim"; // Erro: tipo 'string' não pode ser atribuído a 'boolean'
console.log(nome, idade, ativo);
/*2. Função com Tipos:
Escreva uma função que aceita um array de números e retorna a soma de todos os elementos.Assegure - se de tipar tanto a entrada quanto a saída da função.*/
function somarNumeros(numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
const numeros = [10, 20, 30];
console.log(somarNumeros(numeros)); // Saída: 60
/*3. Enumerações:
Crie um enum para representar os dias da semana e use - o em uma função que imprime uma mensagem de acordo com o dia passado.*/
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana["Domingo"] = "Domingo";
    DiaDaSemana["Segunda"] = "Segunda-feira";
    DiaDaSemana["Terca"] = "Ter\u00E7a-feira";
    DiaDaSemana["Quarta"] = "Quarta-feira";
    DiaDaSemana["Quinta"] = "Quinta-feira";
    DiaDaSemana["Sexta"] = "Sexta-feira";
    DiaDaSemana["Sabado"] = "S\u00E1bado";
})(DiaDaSemana || (DiaDaSemana = {}));
function mensagemDoDia(dia) {
    console.log(`Hoje é ${dia}, tenha um ótimo dia!`);
}
mensagemDoDia(DiaDaSemana.Segunda); // Saída: Hoje é Segunda-feira, tenha um ótimo dia!
function imprimirProduto(produto) {
    const [nome, preco] = produto;
    console.log(`Produto: ${nome}, Preço: R$${preco}`);
}
const produto = ["Camiseta", 29.99];
imprimirProduto(produto); // Saída: Produto: Camiseta, Preço: R$29.99
/*5. Any:
Crie uma variável do tipo any e atribua diferentes tipos de valores a ela.Note como o TypeScript não emite erros nesse caso.*/
let variavelAny = "Texto";
console.log(variavelAny); // Saída: Texto
variavelAny = 100;
console.log(variavelAny); // Saída: 100
variavelAny = true;
console.log(variavelAny); // Saída: true
/*Observação: O tipo any permite que a variável aceite qualquer tipo, o que pode ser útil, mas também perde as vantagens de segurança de tipo oferecidas pelo TypeScript.*/
/*6. Void, Null e Undefined:
Crie uma função que não retorna nada(void) e outra que retorna undefined.Compare as duas.*/
// Função que não retorna nada (void)
function saudacao() {
    console.log("Olá, tudo bem?");
}
// Função que retorna undefined
function semRetorno() {
    console.log("Esta função não retorna nada de útil.");
    return undefined;
}
saudacao();
semRetorno();
//Diferença entre void e undefined:
/*void é usado quando a função não retorna um valor, ou seja, a função não tem um valor de retorno esperado.
undefined é um valor especial que indica a ausência de valor, e é explicitamente retornado quando não há um valor útil a ser retornado pela função.*/ 

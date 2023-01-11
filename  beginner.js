                    // Variaveis


// Declarar uma variável com o seu nome

// Declarar uma variável com a sua idade

// Declarar uma variável com a sua comida
// favorita e não atribuir valor

// Atribuir valor a sua comida favorita

// Declarar 5 variáveis diferentes sem valores

                     // Tipos de dados


// Declare uma variável contendo uma string

// Declare uma variável contendo um número dentro de uma string

// Declare uma variável com a sua idade

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

// Coloque a seguinte frase em uma variável: It's time

// Verifique o tipo da variável que contém o seu nome


                      // Numeros e operadores
                      
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

// Crie duas expressões que retornem NaN

// Somar a string '200' com o número 50 e retornar 250

// Incremente o número 5 e retorne o seu valor incrementado

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

                        //Boolean e Condicionais
 
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}


                //Funcoes

// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

              //Objetos

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem





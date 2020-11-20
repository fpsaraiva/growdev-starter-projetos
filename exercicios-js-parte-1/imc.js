// Crie um programa que calcule o IMC de uma pessoa:
// 1 - Crie constantes para armazenar nome, peso e altura da pessoa.
// 2 - Armazene em uma constante chamada imc o cálculo do IMC da pessoa.
// 3 - Baseado no valor do imc, exibir as seguintes mensagens:
// Se o IMC for maior ou igual a 30: Você está acima do peso.
// Se o IMC for menor que 30: Você não está acima do peso.

const nome = "Carlos";
const peso = 90;
const altura = 1.80;

const imc = peso / (altura * altura);

if(imc >= 30) {
  console.log(nome + ", você está acima do peso.");
} else {
  console.log(nome + ", você não está acima do peso.");
}
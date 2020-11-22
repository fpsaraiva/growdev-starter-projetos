// Crie um programa para calcular a aposentadoria de uma pessoa.
// 1 - Comece criando constantes para armazenar nome, sexo, idade e contribuição.
// 2 - O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos.
// 3 - Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do
// homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no
// mínimo 85 anos na soma.
// 4 - SE a pessoa estiver aposentada: Silvana, você pode se aposentar!
// 5 - SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!

const nome = "Maria";
const sexo = "F";
const idade = 50;
const contribuicao = 35;

const regra = idade + contribuicao;

if(sexo === "M" && contribuicao >= 35 || sexo === "F" && contribuicao >= 30) {
  if(sexo === "M" && regra >= 95 || sexo === "F" && regra >= 85) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar. Motivo: regra não cumpre.`);
  }
} else {
  console.log(`${nome}, você ainda não pode se aposentar. Motivo: tempo de contribuição.`);
}
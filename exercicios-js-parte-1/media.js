// Crie um programa que calcule a média de 3 alunos. Precisamos saber os seguintes resultados:
// 1 - A média de cada aluno.
// 2 - Total de alunos acima da média 6 ou qual eu informar.
// 3 - Mostrar uma mensagem se a média geral da turma ficou acima da média e pelo menos 2 alunos:
//Turma passou da média.

var alunosAcimaDaMedia = 0;
var mediaParaPassar = 6;
var numeroAlunos = 3;

var alunos = [
  {
    nome: "João",
    media: 7
  },
  {
    nome: "Maria",
    media: 5
  },
  {
    nome: "Fernando",
    media: 7
  }
];

var mediaDaTurma = (alunos[0].media + alunos[1].media + alunos[2].media) / numeroAlunos;

console.log(alunos[0].nome + " ficou com média, " + alunos[0].media + ".");
console.log(alunos[1].nome + " ficou com média, " + alunos[1].media + ".");
console.log(alunos[2].nome + " ficou com média, " + alunos[2].media + ".");
console.log();

console.log("Média geral da turma ficou, " + mediaDaTurma + ".\n");


for(i = 0; i < alunos.length; i++) {
  if(alunos[i].media > 6) {
    alunosAcimaDaMedia++;
  }
}

console.log("Total de alunos acima da média: " + alunosAcimaDaMedia + ".\n");

if(mediaDaTurma > mediaParaPassar && alunosAcimaDaMedia >= 2) {
  console.log("A turma está de parabéns! No geral, ficaram acima da média " + mediaParaPassar + ".");
}
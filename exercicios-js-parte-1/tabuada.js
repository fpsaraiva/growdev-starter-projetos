// Crie um programa que inicie com um número inteiro e ele gere a tabuada.
// Lembrando que eu posso trocar o número quando eu quiser, de forma simples.

var numeroInteiro = 5;

console.log("\nTabuada do número: " + numeroInteiro + ".\n");

for(index = 1; index <= 10; index++) {
  console.log(index + " x " + numeroInteiro + " = " + (index * numeroInteiro));
};

console.log();
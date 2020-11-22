/* Crie 5 variáveis que recebam 5 números inteiros cada. Faça um script que
imprime no console o maior número entre eles. */

const arrayDeNumerosUm = [500, 6, 7, 8, 9];
const arrayDeNumerosDois = [0, 1, 2, 3, 4];
const arrayDeNumerosTres = [10, 11, 12, 13, 14];
const arrayDeNumerosQuatro = [2, 1, 0, 50, 15];
const arrayDeNumerosCinco = [20, 21, 22, 23, 24];
var maiorNumero = 0;

for (let index = 0; index < arrayDeNumerosUm.length; index++) {
  if(arrayDeNumerosUm[index] > maiorNumero) {
    maiorNumero = arrayDeNumerosUm[index];
  }
}

for (let index = 0; index < arrayDeNumerosDois.length; index++) {
  if(arrayDeNumerosDois[index] > maiorNumero) {
    maiorNumero = arrayDeNumerosDois[index];
  }
}

for (let index = 0; index < arrayDeNumerosTres.length; index++) {
  if(arrayDeNumerosTres[index] > maiorNumero) {
    maiorNumero = arrayDeNumerosTres[index];
  }
}

for (let index = 0; index < arrayDeNumerosQuatro.length; index++) {
  if(arrayDeNumerosQuatro[index] > maiorNumero) {
    maiorNumero = arrayDeNumerosQuatro[index];
  }
}

for (let index = 0; index < arrayDeNumerosCinco.length; index++) {
  if(arrayDeNumerosCinco[index] > maiorNumero) {
    maiorNumero = arrayDeNumerosCinco[index];
  }
}

console.log(`O maior número é o ${maiorNumero}.`);

/* Crie 5 variáveis que recebam 5 números cada. Faça um script que imprime
no console quais são pares e quais são ímpares. */

for (let index = 0; index < arrayDeNumerosUm.length; index++) {
  if(arrayDeNumerosUm[index] % 2 === 0) {
    console.log(`${arrayDeNumerosUm[index]} é um número par.`);
  } else {
    console.log(`${arrayDeNumerosUm[index]} é um número ímpar.`);
  }
}

for (let index = 0; index < arrayDeNumerosDois.length; index++) {
  if(arrayDeNumerosDois[index] % 2 === 0) {
    console.log(`${arrayDeNumerosDois[index]} é um número par.`);
  } else {
    console.log(`${arrayDeNumerosDois[index]} é um número ímpar.`);
  }
}

for (let index = 0; index < arrayDeNumerosTres.length; index++) {
  if(arrayDeNumerosTres[index] % 2 === 0) {
    console.log(`${arrayDeNumerosTres[index]} é um número par.`);
  } else {
    console.log(`${arrayDeNumerosTres[index]} é um número ímpar.`);
  }
}

for (let index = 0; index < arrayDeNumerosQuatro.length; index++) {
  if(arrayDeNumerosQuatro[index] % 2 === 0) {
    console.log(`${arrayDeNumerosQuatro[index]} é um número par.`);
  } else {
    console.log(`${arrayDeNumerosQuatro[index]} é um número ímpar.`);
  }
}

for (let index = 0; index < arrayDeNumerosCinco.length; index++) {
  if(arrayDeNumerosCinco[index] % 2 === 0) {
    console.log(`${arrayDeNumerosCinco[index]} é um número par.`);
  } else {
    console.log(`${arrayDeNumerosCinco[index]} é um número ímpar.`);
  }
}

/* Crie uma variável que receba um número inteiro. Faça um script que leia
essa variável e imprima no console o dia correspondente da semana, caso o
número seja entre 1 e 7. Ex: 1 = “Domingo”, 2 = “Segunda”... Caso o número
não esteja entre 1 e 7 imprima que o valor é inválido. */

const numeroInteiroAleatorio = 7;

switch(numeroInteiroAleatorio) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Valor inválido");
}

/* Crie uma variável que receba uma idade. Informe se a pessoa é obrigada ou
não a votar, ou se o voto é opcional. */

const idade = 71;

if(idade >= 18 && idade <= 70) {
  console.log("Você é obrigado a votar.");
} else if((idade >= 16 && idade < 18) || idade > 70) {
  console.log("Seu voto é opcional.");
} else {
  console.log("Você não vota.");
}
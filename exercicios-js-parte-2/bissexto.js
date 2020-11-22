// Crie uma variável que receberá um número que corresponderá a um ano. Faça um
// script que diga se o ano é bissexto ou não.
//  Como verificar se um ano é bissexto?
// 1. É múltiplo de 400. Exemplos: 1200, 1600, 2000, 2400, 2800...
// 2. É múltiplo de 4 mas não é de 100. Exemplos: 1996, 2000, 2004, 2008, 2012...

const ano = 2004;

function verificaAnoBissexto(ano) {
  if (ano % 400 == 0) {
    console.log(`${ano} é um ano bissexto.`);
  } else if(ano % 4 == 0 && ano % 100 != 0) {
    console.log(`${ano} é um ano bissexto.`);
  } else {
    console.log(`${ano} não é um ano bissexto.`);
  }
};

verificaAnoBissexto(ano);
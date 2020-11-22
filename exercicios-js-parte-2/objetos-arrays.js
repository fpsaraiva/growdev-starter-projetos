// Crie um programa que armazena dados da empresa Growdev dentro de um objeto
// chamado 'empresa'. Os dados a serem armazenados são: nome, cor, foco, endereço.
// Imprima na tela o nome da empresa e seu endereço.

const empresa = {
  nome: "Growdev",
  cor: "Laranja",
  foco: "Desenvolvimento de Software",
  endereco: {
    rua: "Alameda da Inovação",
    numero: 270
  }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, \
${empresa.endereco.numero}.\n`);

// Crie um programa com um objeto para armazenar dados de um programador como
// nome, idade e tecnologias que trabalha. Um programador pode trabalhar
// com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade.
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário 
// utiliza.

const programador = {
  nome: "Carlos",
  idade: 34,
  tecnologias: [
    {nome: "Python", especialidade: "Data Science"},
    {nome: "JavaScript", especialidade: "Web/Mobile"}
  ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a \
tecnologia ${programador.tecnologias[0].nome} com especialidade em \
${programador.tecnologias[0].especialidade}.`);
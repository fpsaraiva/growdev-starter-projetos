let listaDeAlunos = [];
const inputElement = document.getElementById('sorteador-input');
const listElement = document.getElementById('sorteador-lista');

inputElement.onkeydown = function (event) {
  if(event.key == 'Enter') adicionaAlunoNaLista();
};

function adicionaAlunoNaLista () {
  const inputValue = inputElement.value;

  if(inputValue === '') return;

  const novoAluno = {
    id: Date.now(),
    nome: inputValue,
  }

  listaDeAlunos.push(novoAluno);
  mostrarAlunos();

  inputElement.value = '';
  inputElement.focus();
}

function mostrarAlunos () {
  listElement.innerHTML = '';

  listaDeAlunos.forEach(function(itemDaLista) {
    const alunoElement = document.createElement('li');

    alunoElement.classList = 'aluno-lista-item';
    alunoElement.id = itemDaLista.id;
    alunoElement.innerHTML = criarConteudoAlunoDaLista(itemDaLista);

    const deleteButton = alunoElement.querySelector(`#trash_${itemDaLista.id}`);
    deleteButton.onclick = function () {
      deletarAlunoPeloId(itemDaLista.id);
    };

    listElement.append(alunoElement);
  });
  
}

function criarConteudoAlunoDaLista(itemDaLista) {
  return `
  <div class="aluno-lista-item-conteudo">
    <span class="aluno-item-texto">${itemDaLista.nome}</span>
  </div>
  <div class="aluno-lista-item-acoes">
    <button id="trash_${itemDaLista.id}">
      <img src="./img/delete-icon.svg" alt="botão de deletar aluno">
    </button>
  </div>
  `;
}

function deletarAlunoPeloId(idDoAluno) {
  const listaIdAlunos = listaDeAlunos.map(function(itemDaLista) {
    return itemDaLista.id;
  });

  const indexAluno = listaIdAlunos.indexOf(idDoAluno);
  listaDeAlunos.splice(indexAluno, 1);
  
  mostrarAlunos();
}

function limparListadeAlunos () {
  listaDeAlunos = [];
  
  mostrarAlunos();
}

function reordenarListaDeAlunos () {
  for (var i = listaDeAlunos.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = listaDeAlunos[i];
      listaDeAlunos[i] = listaDeAlunos[j];
      listaDeAlunos[j] = temp;
  }

  console.log(separarListaDeAlunosReordenadaEmPares(listaDeAlunos));
}

function separarListaDeAlunosReordenadaEmPares (array) {
  const listaDeDuplas = [];
  for (let i = 0; i < array.length; i++) {
    if(i % 2 == 0) {
      listaDeDuplas.push(array.slice(i, i + 2))
    }
  }

  return listaDeDuplas;
}

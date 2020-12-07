const content = document.getElementById("cards_panel");
const cards = JSON.parse(localStorage.getItem("cards")) || [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createCard() {
  const title = document.getElementById("inputTitle");
  const content = document.getElementById("inputContent");
  const avatar = `https://www.gravatar.com/avatar/${getRandomInt(1, 500)}?d=robohash`;
 
  if(title.value == "" || content.value == "") {
    alert("Digite valores");
  } else {

    const newCard = {
      title: title.value,
      content: content.value,
      avatar: avatar
    };

    addCard(newCard);
    clearInputs(title, content);
  }
}

function addCard(newCard) {

  const html = `<div class="col-12 col-sm-6 col-lg-3 mb-5" data-position="${cards.length}">
                      <div class="card">
                      <img src="${newCard.avatar}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${newCard.title}</h5>
                          <p class="card-text">${newCard.content}</p>
                          <button type="button" class="btn btn-primary edit-card" data-toggle="modal" data-target="#editCard" onclick="editCard(event)">Editar</button>
                          <button class="btn btn-danger btn-destroy" onclick="destroyCard(event)">Excluir</button>
                        </div>
                      </div>
                    </div>`;
  
  cards.push(newCard);
  content.innerHTML += html;
  saveLocalStorage();
}

function destroyCard(event) {
  const cardRemoved = event.path[3];
  
  cards.splice(cardRemoved.dataset.position, 1);
  cardRemoved.remove();
  saveLocalStorage();
  showCards();
}

function clearInputs(title, content) {
  title.value = "";
  content.value = "";
}

function saveLocalStorage() {
  localStorage.setItem("cards", JSON.stringify(cards));
}

function showCards() {
  content.innerHTML = "";

  for (const item in cards) {
    const html = `<div class="col-12 col-sm-6 col-lg-3 mb-5" data-position="${item}">
                      <div class="card">
                      <img src="${cards[item].avatar}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${cards[item].title}</h5>
                          <p class="card-text">${cards[item].content}</p>
                          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editCard" onclick="editCard(event)">Editar</button>
                          <button class="btn btn-danger btn-destroy" onclick="destroyCard(event)">Excluir</button>
                        </div>
                      </div>
                    </div>`;

    content.innerHTML += html;
  }
}

function deleteAllCards() {
  localStorage.clear();
  cards.length = 0;
  content.innerHTML = "";
}

function editCard(event) {
  const cardEdit = event.path[3];
  const position = cardEdit.dataset.position;

  console.log(cardEdit)

  const tituloEditavel = document.getElementById("editInputTitle");
  const conteudoEditavel = document.getElementById("editInputContent");
  const inputPosition = document.getElementById("editPosition");

  inputPosition.value = position;
  tituloEditavel.value = cards[position].title;
  conteudoEditavel.value = cards[position].content;
}

function saveUpdatedCard() {
  const tituloEditavel = document.getElementById("editInputTitle");
  const conteudoEditavel = document.getElementById("editInputContent");
  const inputPosition = document.getElementById("editPosition");

  cards[inputPosition.value].title = tituloEditavel.value
  cards[inputPosition.value].content = conteudoEditavel.value;

  saveLocalStorage()
  showCards();
 
} 

showCards();
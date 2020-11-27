document.getElementById("avatar").addEventListener("click", function() {
  let display = document.getElementById("logout").style.display;

  if(display == "flex") {
    document.getElementById("logout").style.display = "none";
  } else {
    document.getElementById("logout").style.display = "flex";
  }
});

document.getElementById("logout").addEventListener("click", function() {
  document.getElementById("logout").style.display = "none";

  logout();
});

document.getElementById("visibility").addEventListener("click", function(event) {
  let input = document.getElementById("password");

  if(input.type == "password") {
    input.type = "text";
    event.target.innerHTML = "visibility";
  } else {
    input.type = "password";
    event.target.innerHTML = "visibility_off";
  }
});

function login() {
  let password = document.getElementById("password");
  let email = document.getElementById("email");

  for(const user of users) {
    if(user.email == email.value && user.password == password.value) {
      localStorage.setItem("loged", user.email);
    }
  }

  checkLogged();
}

function logout() {
  localStorage.removeItem("loged");

  checkLogged();
}

function checkLogged() {
  const loged = localStorage.getItem("loged");

  if(loged) {
    console.log(`User logged: ${loged}.`);
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "flex";
    document.getElementsByTagName("nav")[0].style.display = "flex";
  } else {
    document.getElementById("login").style.display = "flex";
    document.getElementById("content").style.display = "none";
    document.getElementsByTagName("nav")[0].style.display = "none";
  }
}

checkLogged();
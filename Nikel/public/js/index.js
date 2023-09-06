const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const checkSession = document.getElementById("session-check").checked;

  const accoount = getAccount(email);

  if (!accoount) {
    alert("Ops! Verifique o usuário ou a senha.");
    return;
  }

  if (accoount) {
    if (accoount.password !== password) {
      alert("Ops! Verifique o usuário ou a senha.");
      return;
    }

    saveSession(email, checkSession);

    window.location.href = "home.html";
  }
});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-create-input").value;
  const password = document.getElementById("password-create-input").value;
  const password2 = document.getElementById("password-create-input2").value;

  //Resolução desafio 3
  if (password !== password2) {
    alert("Senhas não são iguais.");  
    return;
  }

  if (email.length < 5) {
    alert("Preencha o campo com um e-mail válido");
    return;
  }

  if (password.length < 4) {
    alert("Preencha a senha com no mínimo 4 dígitos.");
    return;
  }

  saveAccount({
    login: email,
    password: password,
    trasactions: [],
  });

  myModal.hide();

  alert("Conta criada com sucesso.");
});

function checkLogged() {
  if (session) {
    sessionStorage.setItem("logged", session);
    logged = session;
  }

  if (logged) {
    saveSession(logged, session);

    window.location.href = "home.html";
  }
}

function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
  if (saveSession) {
    localStorage.setItem("session", data);
  }

  sessionStorage.setItem("logged", data);
}

function getAccount(key) {
  const accoount = localStorage.getItem(key);

  if (accoount) {
    return JSON.parse(accoount);
  }

  return "";
}

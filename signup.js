let user = JSON.parse(localStorage.getItem("user")) || {};

function signup(e) {
  e.preventDefault();
  let username = document.getElementById("name");
  let useremail = document.getElementById("email");
  let userpassword = document.getElementById("password");

  user = {
    name: username.value,
    email: useremail.value,
    password: userpassword.value
  };

  localStorage.setItem("user", JSON.stringify(user));


  window.location.href = "login.html";
}


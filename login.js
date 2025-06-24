let loginemail = document.getElementById("loginemail");
let loginpassword = document.getElementById("loginpassword");

  let user = JSON.parse(localStorage.getItem("user")) || {};
 

  console.log(user);
  
function login(event) {
  event.preventDefault();
  let emailval = loginemail.value;
  let passval = loginpassword.value;

//   console.log(emailval, passval);

// console.log("knkfndjk");


  if (emailval === user.email && passval === user.password) {
  window.location.href = "index.html";
} else if (!user.email || !user.password) {
  alert("Please sign up first");
  loginemail.value = '';
  loginpassword.value = '';

} else {
  alert("Incorrect email or password");
  loginpassword.value = '';
}

  


}

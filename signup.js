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


  if (user.name == '' || user.email == '' || user.password == '') {
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please fill in all fields'
  });
  }else{
    localStorage.setItem("user", JSON.stringify(user));
   Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Sign up successful',
    confirmButtonText: 'OK'
  }).then(() => {
    window.location.href = "login.html";
  });
  }


}
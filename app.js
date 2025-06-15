let Featureddata = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
];

const grid = document.getElementById("product-grid");

for (let i = 0; i < Featureddata.length; i++) {
  grid.innerHTML += `
    <div class="product-card">
      <img src="${Featureddata[i].image}" alt="img">
      <h3>${Featureddata[i].title}</h3>
      <p>Rs.${Featureddata[i].price}$</p>
      <button class="add-cart-btn">Add to Cart</button>
    </div>
  `;
}


let mobilenav = document.getElementById("mobile-nav");

function toggleMobileNav() {
  if (mobilenav.style.display === "none") {
    mobilenav.style.display = "block";
  } else {
    mobilenav.style.display = "none";
    
  }
}


let dropdown = document.getElementById("dropdown");
// dropdown.style.display = "none";

function toggleDropdown() {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
    
}



function signup() {
  let username = document.getElementById('name');
  let useremail = document.getElementById('email');
  let userpassword = document.getElementById('password');

  let datapush = [];

  let user = {
    name: username.value,
    email: useremail.value,
    password: userpassword.value
  };

  datapush.push(user);
  console.log(datapush);

  
 


}


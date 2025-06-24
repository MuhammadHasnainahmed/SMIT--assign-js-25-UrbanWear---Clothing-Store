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


let carticon = document.querySelector(".cart-icon");

let countnumber = document.getElementById("countnumber");
const grid = document.getElementById("product-grid");
let count = 0;

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

for (let i = 0; i < Featureddata.length; i++) {
  grid.innerHTML += `
    <div class="product-card">
      <img src="${Featureddata[i].image}" alt="img">
      <h3>${Featureddata[i].title}</h3>
      <p>Rs.${Featureddata[i].price}$</p>
      <button onclick="addToCart(${Featureddata[i].id})" class="add-cart-btn">Add to Cart</button>
    </div>
  `;
}


function addToCart() {
  
  // cart.push(Featureddata.id);

  // localStorage.setItem("cart", JSON.stringify(cart));

  carticon.style.display = "block";
   count++;
   countnumber.innerHTML = `<p>${count}</p>`;
   
}

// export default addToCart;

let mobilenav = document.getElementById("mobile-nav");

function toggleMobileNav() {
  if (mobilenav.style.display === "block") {
    mobilenav.style.display = "none";
  } else {
    mobilenav.style.display = "block";
  }
}

let dropdown = document.getElementById("dropdown");

function toggleDropdown() {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function logOut() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

window.onload = function () {
  let userinfo = document.getElementById("dropdown");
  let user = JSON.parse(localStorage.getItem("user")) || {};

  let formattedName = user.name ? user.name[0].toUpperCase() + user.name.slice(1) : "";

// console.log(user.name[0]);

  function render() {
    if (formattedName) {
      userinfo.innerHTML = "";
      const userName = `<p>${formattedName}</p>`;
      const logOutButton = `<button class="logout-btn" onclick="logOut()">Logout</button>`;

      userinfo.innerHTML += userName;
      userinfo.innerHTML += logOutButton;
    }
  }

  render();
};

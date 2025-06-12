let collectiondata = [
  {
    id: 1,
    titlecoll: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    pricecoll: 109.95,
    imagecoll: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    titlecoll: "Mens Casual Premium Slim Fit T-Shirts ",
    pricecoll: 22.3,
    imagecoll:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    titlecoll: "Mens Cotton Jacket",
    pricecoll: 55.99,
    imagecoll: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    titlecoll: "Mens Casual Slim Fit",
    pricecoll: 15.99,
    imagecoll: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 5,
    titlecoll:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    pricecoll: 695,
    imagecoll: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 6,
    titlecoll: "Solid Gold Petite Micropave ",
    pricecoll: 168,
    imagecoll: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 7,
    titlecoll: "White Gold Plated Princess",
    pricecoll: 9.99,
    imagecoll: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 8,
    titlecoll: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    pricecoll: 10.99,
    imagecoll: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
  
  
  
  {
    id: 14,
    titlecoll: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    pricecoll: 56.99,
    imagecoll: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 15,
    titlecoll:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    pricecoll: 29.95,
    imagecoll: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 16,
    titlecoll: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    pricecoll: 39.99,
    imagecoll: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 17,
    titlecoll: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    pricecoll: 9.85,
    imagecoll: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  {
    id: 18,
    titlecoll: "Opna Women's Short Sleeve Moisture",
    pricecoll: 7.95,
    imagecoll: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
  {
    id: 19,
    titlecoll: "DANVOUY Womens T Shirt Casual Cotton Short",
    pricecoll: 12.99,
    imagecoll: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
];

let collproductgrid = document.getElementById("collproductgrid");

for (let i = 0; i < collectiondata.length; i++) {
  collproductgrid.innerHTML += `
    <div class="product-card">
      <img src="${collectiondata[i].imagecoll}" alt="img">
      <h3>${collectiondata[i].titlecoll}</h3>
      <p>Rs.${collectiondata[i].pricecoll } $</p>
      <button class="add-cart-btn">Add to Cart</button>
    </div>
  `;
}


let mobilenavshop = document.getElementById("mobile-navshop");

function toggleMobileNav() {
  if (mobilenavshop.style.display === "none") {
    mobilenavshop.style.display = "block";
  } else {
    mobilenavshop.style.display = "none";
    
  }
}


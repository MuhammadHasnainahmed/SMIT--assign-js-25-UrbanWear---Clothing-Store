let cartItem = document.getElementById("cartItem");

let cartdata = JSON.parse(localStorage.getItem("cart")) || [];

let totalPrice = document.getElementById("totalPrice");


let quantity =document.getElementById("quantity");

// console.log(cartdata);


function cartdisplay() {
      cartItem.innerHTML = "";

      if (cartdata.length > 0) {
      for (let i = 0; i < cartdata.length; i++) {
            //   console.log(cartdata[i]);

           
            
            
              cartItem.innerHTML += `
              <div class="cart-card">
        <img src="${cartdata[i].image}" alt="item image" />
        <div class="item-details">
          <h4>${cartdata[i].title}</h4>
          <p>Delivery 24th July</p>
        </div>
        <div class="quantity">
          <button onclick="decrement(${[i]})">-</button>
       
        
        <p id="quantity"></p>
          <button onclick="increment(${[i]})">+</button>
        </div>
    
        <div class="price">
        <p>
          Rs  ${cartdata[i].price} 
        </p> 
    
        <button class="remove-btn" onclick="removeItem(${[i]})"> <i class="fa-solid fa-trash"></i></button>
        
        </div>
        
      </div>
              `
            }
          }else{
            cartItem.innerHTML = `<h2>Cart is empty</h2>`
          }

                      
}

cartdisplay();


function totalpriceval() {
       let total = 0;
       for (let i = 0; i < cartdata.length; i++) {

        // console.log(cartdata[i].price);


              total += cartdata[i].price;



              totalPrice.innerHTML = total.toFixed(2);
              
        
             
        
       }
}

totalpriceval();


function removeItem(index) {
      cartdata.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartdata));
      cartdisplay();
      totalpriceval();

      window.location.reload();
}


function clearCart() {
    localStorage.removeItem("cart");
    // cartItem.innerHTML = `<h2>Cart is empty</h2>`
    window.location.reload();


}


// function decrement(index) {
    
// }


// function increment(index) {
//      console.log("increment", index);
      

//     //  console.log("cartdata[index]", cartdata[index].quantity += 1);
     

//      cartdata[index].quantity = (cartdata[index].quantity || 1) + 1;
//      localStorage.setItem("cart", JSON.stringify(cartdata));
//      cartdisplay();
//      totalpriceval();
     
// }
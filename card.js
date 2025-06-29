let cartItem = document.getElementById("cartItem");

let cartdata = JSON.parse(localStorage.getItem("cart")) || [];

let totalPrice = document.getElementById("totalPrice");

let totalamount  = document.getElementById("totalamount");


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
          <p id="quantity">${cartdata[i].quantity}</p>
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



              total += cartdata[i].price;


                
              if (totalPrice) {
                 
                totalPrice.innerHTML = `${total.toFixed(2)}`;
                // console.log(totalPrice);
                
              }


              if (totalamount) {
                totalamount.innerHTML = `Rs${total.toFixed(2)}`;
                // console.log(totalamount);

                
              }


              
        
             
        
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
    window.location.reload();


}


function increment(index) {

 
 let quantity = cartdata[index].quantity += 1;
     
  localStorage.setItem("cart", JSON.stringify(cartdata)); 

  quantity.innerHTML = `${quantity}`;
  cartdisplay();                   
  totalpriceval();                 
}


function decrement(index) {
    let quantity = cartdata[index].quantity -= 1;
     
  localStorage.setItem("cart", JSON.stringify(cartdata)); 

  quantity.innerHTML = `${quantity}`;
  cartdisplay();                   
  totalpriceval();  
}


let checkoutwrapper = document.querySelector(".checkout-wrapper");



  function checkout() {
      
    if (cartdata.length === 0) {
      checkoutwrapper.style.display= "none"
      
    }else{
      checkoutwrapper.style.display= "block"
    }

    //  checkoutwrapper.style.display= "block"
}


let close_icon = document.querySelector(".close-icon");


close_icon.addEventListener('click',function(){
  checkoutwrapper.style.display= "none"
})


// console.log(subtotal);

let  subtotal = document.getElementById("subtotal");
function delivery() {
  
  let deliveryvalue  = 100 ;
  let totalText = totalamount.innerText.trim();
  let totalamountva = parseFloat(totalText);
   
   
   let taxva = 18;
   let subtotalva = totalamountva + deliveryvalue +taxva;
  //  console.log(subtotalva);
   
     subtotal.innerHTML = subtotalva
}

delivery()






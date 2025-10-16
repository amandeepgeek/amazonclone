export let cart = JSON.parse(localStorage.getItem('cart'));
//This is a test commit

if(!cart){
cart = [
     {
          productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',   //de duplicating the data or normalizing the data
          quantity:2,
     }, 
     {
         productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
         quantity:1
     }
];

}



 // setItem takes two strings first item is name and second one is the data taht we wnat to save
 // local storage can only save strings we need to convert it first with json
function saveToStorage (){
     localStorage.setItem('cart', JSON.stringify(cart) );    
}

// lets use  thid function, whenever we update the cart, we need to save it to localStorage





//we have not entered the product image and price 
     // we just needto add the id ///is called normalizng the data
export function addToCart (productId){

  let matchingItem;

     cart.forEach((cartItem)=>{
    if (productId===cartItem.productId){
          matchingItem=cartItem;
    }
     });

     if (matchingItem){
          matchingItem.quantity += 1;
     }

     else {
      cart.push({
      productId: productId,
      quantity:1
    });
     }
saveToStorage();

}



export function removeFromCart (productId){
    const newCart= [];
    
    cart.forEach ((cartItem)=>{
       if (cartItem.productId !== productId){
          newCart.push(cartItem);
       }
    });

    cart = newCart;
    
saveToStorage();
    }


item1 = {
    name: "paper",
    quantity: 10
}

item2 =  {
    name: "pen",
    quantity: 5
}

store = [item1, item2]

cart = [];

function addItem(prodName){
    
    let findItem = store.filter(product => product.name === prodName);

    cart.push(findItem);

}

function removeItem(prodName){
    let findItem = store.filter(product => product.name === prodName);

    cart.pop(findItem);

}

function getTotalQuantity(){
    let cartTotalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);

    console.log("Total quantity of items in cart: " + cartTotalQuantity);
}

console.log(cart);

addItem("paper");
addItem("pen");

console.log(cart);

removeItem("paper");

console.log(cart);

getTotalQuantity();





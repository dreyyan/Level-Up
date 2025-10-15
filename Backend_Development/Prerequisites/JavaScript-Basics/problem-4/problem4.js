product1 = {
    name: "paper",
    price: 100,
    inStock: true
}

product2 = {
    name: "pencil",
    price: 10,
    inStock: false
}

product3 = {
    name: "eraser",
    price: 15,
    inStock: true
}

let products = [product1, product2, product3];

let stocked = products.filter(product => product.inStock === true);

console.log(stocked);

let productNames = products.map(product => product.name);

console.log(productNames);

let inStockTotalPrice = stocked.reduce((sum, product) => sum + product.price, 0);

console.log(inStockTotalPrice);
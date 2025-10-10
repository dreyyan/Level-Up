// Define an array of objects representing products
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Headphones", price: 200, inStock: false },
    { name: "Keyboard", price: 150, inStock: true },
    { name: "Mouse", price: 50, inStock: true },
    { name: "Monitor", price: 300, inStock: false }
];

// Use .filter() to get all in-stock products
let inStockProducts = products.filter(product => product.inStock === true);

// Use .map() to create an array of product names
let productNames = products.map(product => product.name);

// Use .reduce() to calculate total price of in-stock products
let totalPrice = inStockProducts.reduce((sum, product) => sum + product.price, 0);

// Display results to console
console.log('All Products:', products);
console.log('In Stock Products: ', inStockProducts);
console.log('Product Names: ', productNames);
console.log('Total Price: $', totalPrice);
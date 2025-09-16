// Implement a simple shopping cart using an array to store items
let cart = [
    {name: "Milk", quantity: 1},
    {name: "Grapes", quantity: 2},
    {name: "Soap", quantity: 3},
    {name: "Noodles", quantity: 4},
    {name: "Toothbrush", quantity: 5},
];

const addItem = (name, quantity) => {
    // Check if item already exists in the cart
    let itemExists = cart.find(product => product.name === name);

    if (itemExists) {
        console.log('ERROR: Item already exists');
        return;
    }

    // Create item and add it to the cart
    cart.push({name, quantity});
    console.log(`+ ${quantity} "${name}" added to cart"`);
}

const removeItemByName = (name) => {
    // Check if item already exists in the cart
    let itemExists = cart.find(product => product.name === name);

    if (!itemExists) {
        console.log('ERROR: Item does not exist');
        return;
    }

    // Remove item from the cart
    cart.filter(item => item.name === name);
    console.log(`- "${name}" removed from the cart"`);
}

const calculateTotalItemQuantity = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Add items to cart
addItem("Watch", 3);
addItem("Candy", 12);
addItem("Grapes", 7); // ERROR: Existing item

// Remove an item from cart
removeItemByName("Soap");

// Display total quantity
console.log(`Total Quantity: ${calculateTotalItemQuantity()}`);
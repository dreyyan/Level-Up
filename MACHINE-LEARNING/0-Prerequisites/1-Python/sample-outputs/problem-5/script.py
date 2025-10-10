# Problem #5: Data Structures for Analysis
# Define sales dataset
sales = [
    {"product": "Laptop", "quantity": 2, "price": 999.99},
    {"product": "Phone", "quantity": 5, "price": 499.99},
    {"product": "Tablet", "quantity": 3, "price": 299.99}
]

# Function to add a sale
def add_sale(sales, product, quantity, price):
    sales.append({"product": product, "quantity": quantity, "price": price})

# Function to remove a sale by product name
def remove_sale(sales, product_name):
    global sales
    sales = [sale for sale in sales if sale["product"] != product_name]

# Function to calculate total revenue
def total_revenue(sales):
    return sum(sale["quantity"] * sale["price"] for sale in sales)

# Demonstrate usage
print("Initial sales:", sales)

# Add a new sale
add_sale(sales, "Headphones", 10, 89.99)
print("After adding Headphones:", sales)

# Remove a sale
remove_sale(sales, "Phone")
print("After removing Phone:", sales)

# Calculate and print total revenue
revenue = total_revenue(sales)
print("Total revenue:", revenue)
# Problem #4: List and Dictionary Methods
# Define list of products
products = [
    {"name": "Laptop", "price": 999.99, "in_stock": True},
    {"name": "Phone", "price": 499.99, "in_stock": False},
    {"name": "Tablet", "price": 299.99, "in_stock": True},
    {"name": "Headphones", "price": 89.99, "in_stock": True}
]

# List comprehension to get in-stock products
in_stock_products = [product for product in products if product["in_stock"]]

# List comprehension to get product names
product_names = [product["name"] for product in products]

# Function to calculate total price of in-stock products
def total_in_stock_price(products):
    return sum(product["price"] for product in products if product["in_stock"])

# Calculate and print results
total_price = total_in_stock_price(products)

print("All products:", products)
print("In-stock products:", in_stock_products)
print("Product names:", product_names)
print("Total price of in-stock products:", total_price)
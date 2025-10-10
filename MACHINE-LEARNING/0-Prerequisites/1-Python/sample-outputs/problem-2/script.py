# Problem #2: Functions and List Comprehensions
import math

# Function to calculate square root
def square_root(num):
    return math.sqrt(num)

# Function to calculate mean of a list
def calculate_mean(numbers):
    return sum(numbers) / len(numbers) if numbers else 0

# List of numbers
numbers = [4, 9, 16, 25, 36]

# List comprehension to apply square_root
sqrt_numbers = [square_root(num) for num in numbers]

# Calculate mean of original list
mean_value = calculate_mean(numbers)

# Print results
print("Original numbers:", numbers)
print("Square roots:", sqrt_numbers)
print("Mean of numbers:", mean_value)
# Problem #1: Variables and Data Types
# Declaring variables with different data types
name = "Alice"  # string
age = 25  # integer
height = 5.6  # float
is_student = True  # boolean
scores = [85, 90, 92]  # list
student_info = {"name": "Alice", "grade": "A"}  # dictionary

# Printing variables
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is Student:", is_student)
print("Scores:", scores)
print("Student Info:", student_info)

# Type conversion examples
age_to_string = str(age)
height_to_int = int(height)
string_to_int = int("123")
float_to_string = str(3.14)

# Printing type conversion results
print("Age as string:", age_to_string, "Type:", type(age_to_string))
print("Height as integer:", height_to_int, "Type:", type(height_to_int))
print("String to integer:", string_to_int, "Type:", type(string_to_int))
print("Float to string:", float_to_string, "Type:", type(float_to_string))
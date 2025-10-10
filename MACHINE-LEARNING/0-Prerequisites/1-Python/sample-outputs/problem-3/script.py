# Problem #3: Dictionaries and Data Processing
# Define dataset of students
students = [
    {"name": "Alice", "grade": 85, "passed": True},
    {"name": "Bob", "grade": 55, "passed": False},
    {"name": "Charlie", "grade": 70, "passed": True},
    {"name": "Diana", "grade": 45, "passed": False}
]

# Function to calculate average grade
def average_grade(students):
    grades = [student["grade"] for student in students]
    return sum(grades) / len(grades) if grades else 0

# Function to get names of passing students
def passing_students(students):
    return [student["name"] for student in students if student["grade"] >= 60]

# Calculate and print results
avg_grade = average_grade(students)
passers = passing_students(students)

print("Student dataset:", students)
print("Average grade:", avg_grade)
print("Passing students:", passers)
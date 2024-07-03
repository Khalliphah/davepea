def get_boolean_input(prompt):
    while True:
        value = input(prompt).strip().lower()
        if value in ['true', 't', 'yes', 'y']:
            return True
        elif value in ['false', 'f', 'no', 'n']:
            return False
        else:
            print("Please enter a valid boolean value (True/False or Yes/No).")

first_name = input('Enter your first name: ')
last_name = input('Enter your last name: ')
date_of_birth = input("Enter your date of birth (DD/MM/YYYY): ")
state_of_origin = input("Enter your state of origin: ")
marital_status = get_boolean_input("Are you married? (True/False or Yes/No): ")
school_attended = input("Enter the school you attended: ")
department = input("Enter your department: ")
year_of_graduation = input("Enter your year of graduation: ")
house_address = input("Enter your house address: ")
matriculation_number = int(input("Enter your matriculation number: "))
employment_status = get_boolean_input("Are you employed? (True/False or Yes/No): ")

print('First name:', first_name)
print('Last name:', last_name)
print('Date of birth:', date_of_birth)
print('State of origin:', state_of_origin)
print('Marital status:', marital_status)
print('School attended:', school_attended)
print('Department:', department)
print('Year of graduation:', year_of_graduation)
print('House address:', house_address)
print('Matriculation number:', matriculation_number)
print('Employment status:', employment_status)

# Planning

## User Story

AS A business owner  
  
I WANT to be able to view and manage the departments, roles, and employees in my company  
  
SO THAT I can organize and plan my business  

## Aceptance Criteria

GIVEN a command-line application that accepts user input  

WHEN I start the application  

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role  

WHEN I choose to view all departments  

THEN I am presented with a formatted table showing department names and department ids  

WHEN I choose to view all roles  

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role  

WHEN I choose to view all employees  

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to  

WHEN I choose to add a department  

THEN I am prompted to enter the name of the department and that department is added to the database  

WHEN I choose to add a role  

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database  

WHEN I choose to add an employee  

THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database  

WHEN I choose to update an employee role  

THEN I am prompted to select an employee to update and their new role and this information is updated in the database  

## Steps/Issues

### DB

Create Schema

Object constructors

### Back end

CRUD operations/logic

### Front/CLI

Inquirer queries

CRUD utilization

### Finishing Touches

Prettify inquirer interface

Seed data

README

// viewAllDepartments => display - table with departments id/name + add department + go back button

// viewAllRoles => display - table with roles id/title/salary/department(name if possible) + add role + go back button

// viewAllEmployees => display - table with employees id/first_name/last_name/role/department/salary/manager + add employee + go back button

// add department => prompt for name of dept

// add role => prompt for name of role, salary, and department

// add employee => prompt for first, last names, role, manager

// update employee role => prompt to select employee => prompt for new role

// Exit ManageEZ
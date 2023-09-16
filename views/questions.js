const inquirer = require('inquirer')

const startQuestions = {
    type: "list",
    name: "selectOperation",
    message: "Welcome to ManageEZ. What kind of operation are you looking for today?",
    choices: [
        "View all departments.",
        "View all roles.",
        "View all employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        new inquirer.Separator(),
        "Exit Manage EZ.",
        new inquirer.Separator(),
    ]
}

const deptQuestions = [
    {
        type: "list",
        name: "selectOperation",
        message: "How would you like to proceed?",
        choices: [
            "Add department.",
            new inquirer.Separator(),
            "Go back.",
            "Exit Manage EZ.",
            new inquirer.Separator(),
        ]
    },
    {
        type: "input",
        name: "deptName",
        message: "What is the name of this new Department?",
    },

];

const roleQuestions = [
    {
        type: "list",
        name: "selectOperation",
        message: "How would you like to proceed?",
        choices: [
            "Add role.",
            new inquirer.Separator(),
            "Go back.",
            "Exit Manage EZ.",
            new inquirer.Separator(),
        ]
    },
    [

        {
            type: "input",
            name: "title",
            message: "What is the name of this new role?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of this new role?",
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the id for this new role's department?",
        }
    ]
]

const employeeQuestions = [
    {
        type: "list",
        name: "selectOperation",
        message: "How would you like to proceed?",
        choices: [
            "Add employee.",
            "Update employee role",
            new inquirer.Separator(),
            "Go back.",
            "Exit Manage EZ.",
            new inquirer.Separator(),
        ]
    },
    [
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of this new employee?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name of this new employee?",
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the role id for this new employee?",
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the id of the new employees manager?",
            default: 'none'
        }  
    ],
    [
        {
            type: "input",
            name: "id",
            message: "What is the id for the employee you'd like to update?"
        },
        {
            type: "input",
            name: "role",
            message: "What is the id of the employees new role?",
        }
    ]
]

module.exports = { startQuestions, deptQuestions, roleQuestions, employeeQuestions }
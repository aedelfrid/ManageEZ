const inquirer = require('inquirer')

//inquirer;

const questions = [
    {
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
    },
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
]

module.exports = questions
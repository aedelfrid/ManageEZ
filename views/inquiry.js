const inquirer = require('inquirer')
const CRUD = require('../controllers/CRUD')
const { department, role, employee } = require('../models')

const questions = require('./questions')

const prompt = inquirer.createPromptModule();

const start = questions[0]

const inquirerStart = () => prompt(start).then((answers) => {
    switch (answers.selectOperation) {
        case "View all departments.":
            deptsView();
            break;
        case "View all roles.":
            rolesView();
            break;
        case "View all employees":
            employeesView();
            break;
        case "Add Department":
            deptAdd();
            break;
        case "Add Role":
            roleAdd();
            break;
        case "Add Employee":
            employeeAdd();
            break;
        case "Update Employee Role":
            employeeUpdate();
            break;
        case "Exit Manage EZ.":
            exitManageEZ()
    }   
});

const exitManageEZ = () => {
    console.log('Thank you for using Manage EZ!')
    process.exit()
}

const deptsView = async () => {
    const data = await CRUD.selectAllDepts()
    console.table(data)
    prompt(questions[1]).then((answers)=> {
        // add dept, go back, exit
        switch(answers.selectOperation) {
            case "Add department.":
                deptAdd();
                break;
            case "Go back.":
                inquirerStart();
                break;
            case "Exit Manage EZ.":
                exitManageEZ();
        }
    })
};

const deptAdd = async () => {
    prompt(questions[3]).then((answers) => {
        const deptObj = new department(answers.deptName)
        CRUD.addDepartment(deptObj)
        deptsView();
    })
}

// project 3 idea; role playing game/site 

inquirerStart()
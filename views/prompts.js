const inquirer = require('inquirer')

const CRUD = require('../controllers/CRUD')
const { department, role, employee } = require('../models')

const { startQuestions, deptQuestions, roleQuestions, employeeQuestions } = require('./questions')

const prompt = inquirer.createPromptModule();

module.exports = manageEzFlow = () => {

    let table = '';

    const inquirerStart = () => prompt(startQuestions).then((answers) => {
        table = '';

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
        table = 'department';
        const data = await CRUD.selectAllX(table)
        console.table(data)

        prompt(deptQuestions[0]).then((answers) => {
            switch (answers.selectOperation) {
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
        prompt(deptQuestions[1]).then((answers) => {
            const deptObj = new department(answers.deptName)
            CRUD.addDepartment(deptObj)
            deptsView();
        })
    };

    const rolesView = async () => {
        table = 'role';
        const data = await CRUD.selectAllX(table)
        console.table(data)

        prompt(roleQuestions[0]).then((answers) => {
            switch (answers.selectOperation) {
                case "Add role.":
                    roleAdd();
                    break;
                case "Go back.":
                    inquirerStart();
                    break;
                case "Exit Manage EZ.":
                    exitManageEZ();
            }
        })
    };

    const roleAdd = async () => {
        prompt(roleQuestions[1]).then((answers) => {
            const { title, salary, department_id } = answers;
            const roleObj = new role(title, salary, department_id);
            CRUD.addRole(roleObj);
            rolesView();
        })
    };

    const employeesView = async () => {
        table = 'employee';
        const data = await CRUD.selectAllX(table)
        console.table(data);

        prompt(employeeQuestions[0]).then((answers) => {
            switch (answers.selectOperation) {
                case "Add employee.":
                    employeeAdd();
                    break;
                case "Update employee role":
                    employeeUpdate();
                    break;
                case "Go back.":
                    inquirerStart();
                    break;
                case "Exit Manage EZ.":
                    exitManageEZ();
            }
        })
    };

    const employeeAdd = async () => {
        prompt(employeeQuestions[1]).then((answers) => {
            let { first_name, last_name, role_id, manager_id } = answers;
            if (manager_id === 'none') {
                manager_id = null
            }
            const employeeObj = new employee(first_name, last_name, role_id, manager_id);
            CRUD.addEmployee(employeeObj);
            employeesView();
        })
    };

    const employeeUpdate = () => {
        prompt(employeeQuestions[2]).then((answers) => {
            const { id, role } = answers;
            CRUD.updateEmployeeRole(id, role);
            employeesView();
        })
    };

    inquirerStart()

};
const db = require('./config')

const selectAllDepts = () => {
    db.execute(
        'SELECT * FROM `department`',
        function(err, results) {
            if (err) throw err
            return results
        }
    );
};

const selectAllRoles = () => {
    db.execute(
        'SELECT * FROM `role`',
        function(err, results) {
            if (err) throw err
            return results
        }
    );
};

const selectAllEmployees = () => {
    db.execute(
        'SELECT * FROM `employee`',
        function(err, results) {
            if (err) throw err
            return results
        }
    );
};

// need values in an array?

const addDepartment = (deptObj) => {
    const { id, name } = deptObj;
    db.execute(
        'INSERT INTO `department`(id, name) VALUE ?',
        [id, name],
        function(err, results) {
            if (err) throw err
            console.log(`Department ${name} added!`)
        }
    );
}

const addRole = (roleObj) => {
    const { id, title, salary, department_id } = roleObj;
    db.execute(
        'INSERT INTO `department`(id, name) VALUE ?',
        [id, title, salary, department_id],
        function(err, results) {
            if (err) throw err
            console.log(`role ${title} added!`)
        }
    );
}

const addEmployee = (employeeObj) => {
    const { id, first_name, last_name, role_id, manager_id } = employeeObj;
    db.execute(
        'INSERT INTO `employee`(id, first_name, last_name, role_id, manager_id) VALUE ?',
        [id, first_name, last_name, role_id, manager_id],
        function(err, results) {
            if (err) throw err
            console.log(`Employee ${first_name} ${last_name} added!`)
        }
    );
};

const updateEmployeeRole = () => {

}
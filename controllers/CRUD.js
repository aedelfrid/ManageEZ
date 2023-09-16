const db = require('./config')

const selectAllDepts = async () => {
    return new Promise((resolve, reject) => {
        db.execute(
            'SELECT * FROM `department`',
            function(err, results) {
                return err ? reject(err) : resolve(results)
            }
        );
    }) 
};

const selectAllRoles = async () => {
    return new Promise((resolve, reject) => {
        db.execute(
            'SELECT * FROM `role`',
            function(err, results) {
                return err ? reject(err) : resolve(results)
            }
        );
    })
};

const selectAllEmployees = async () => {
    return new Promise((resolve, reject) => {
        db.execute(
            'SELECT * FROM `employee`',
            function(err, results) {
                return err ? reject(err) : resolve(results)
            }
        );
    })
    
};

const addDepartment = async (deptObj) => {
    const { id, name } = deptObj;
    return new Promise((resolve, reject) => {
        db.execute(
            'INSERT INTO `department`(id, name) VALUE ?',
            [id, name],
            function(err) {
                return err ? reject(err) : resolve(console.log(`Department ${name} added!`))
            }
        );
    })
    
    
}

const addRole = async (roleObj) => {
    const { id, title, salary, department_id } = roleObj;
    return new Promise((resolve, reject) => {
        db.execute(
            'INSERT INTO `department`(id, name) VALUE ?',
            [id, title, salary, department_id],
            function(err) {
                return err ? reject(err) : resolve(console.log(`role ${title} added!`))
            }
        );
    })
}

const addEmployee = async (employeeObj) => {
    const { id, first_name, last_name, role_id, manager_id } = employeeObj;
    return new Promise((resolve, reject) => {
        db.execute(
            'INSERT INTO `employee`(id, first_name, last_name, role_id, manager_id) VALUE ?',
            [id, first_name, last_name, role_id, manager_id],
            function(err) {
                return err ? reject(err) : resolve(console.log(`Employee ${first_name} ${last_name} added!`))
            }
        );
    })
    
    
};

const updateEmployeeRole = async (id, role) => {
    return new Promise((resolve, reject) => {
        db.execute(
            'UPDATE `employee` SET `role` VALUE ? WHERE `id` VALUE ?',
            [role, id],
            function(err) {
                return err ? reject(err) : resolve(console.log(`Updated role for Employee number ${id}`))
            }
        );
    })
    
};
//const newFunc = async () => {
    //const data = await selectAllDepts()
    //console.log(data)
    //db.end()
//}

//newFunc()


module.exports = { selectAllDepts, selectAllRoles, selectAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole }
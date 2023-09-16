const db = require('./config')

const selectAllX = async (table) => {
    let query;

    switch (table) {
        case 'department':
            query = 'SELECT * FROM `department`';
            break;
        case 'role':
            query = 'SELECT * FROM `role`';
            break;
        case 'employee':
            query = 'SELECT * FROM `employee`'
    }
    
    return new Promise((resolve, reject) => {
        db.execute(
            query,
            function(err, results) {
                return err ? reject(err) : resolve(results)
            }
        );
    })
    
};

const viewByName = (table, id) => {
    return new Promise((resolve, reject) => {
        db.execute(
            'SELECT `employee` SET `role_id` = ? WHERE `id` = ?',
            [role, id],
            function(err) {
                return err ? reject(err) : resolve(console.log(`Updated role for Employee number ${id}`))
            }
        );
    })
}

const addDepartment = async (deptObj) => {
    return new Promise((resolve, reject) => {
        const { id, name } = deptObj;
        db.execute(
            'INSERT INTO `department` (`id`, `dept_name`) VALUES (?, ?)',
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
            'INSERT INTO `role`(`id`, `title`, `salary`, `department_id`) VALUES (?,?,?,?)',
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
            'INSERT INTO `employee`(id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)',
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
            'UPDATE `employee` SET `role_id` = ? WHERE `id` = ?',
            [role, id],
            function(err) {
                return err ? reject(err) : resolve(console.log(`Updated role for Employee number ${id}`))
            }
        );
    })
    
};

//const newFunc = async () => {
    //let table = `employee`
    //const data = await selectAllX(table)
    //console.table(data)
    //db.end()
//}

//newFunc()


module.exports = { selectAllX, addDepartment, addRole, addEmployee, updateEmployeeRole }
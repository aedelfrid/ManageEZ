const db = require('./config')

const selectAllX = async (table) => {
    let query;

    switch (table) {
        case 'department':
            query = 'SELECT * FROM `department`';
            break;
        case 'role':
            query = 'SELECT * FROM `role` JOIN `department` ON role.department_id = department.id';
            break;
        case 'employee':
            query =
                `SELECT
                e.id,
                CONCAT(e.last_name, ', ', e.first_name) AS employee_name,
                IFNULL(CONCAT(m.last_name, ', ', m.first_name),
                'Top Manager') AS 'manager',
                role.title AS title,
                role.salary AS salary
            FROM 
                employee e
            LEFT JOIN employee m ON
                m.id = e.manager_id
            JOIN role ON
                e.role_id = role.id`
    };

    return new Promise((resolve, reject) => {
        db.execute(
            query,
            function (err, results) {
                return err ? reject(err) : resolve(results)
            }
        );
    })

};

// where it shows department_id, role_id, manager_id => get dept_name, title, first_name & last_name
// 

const viewName = (table, id) => {
    let query;
    let data;


    switch (table) {
        case 'role':
            query = 'SELECT `dept_name` FROM `department`'
            return new Promise((resolve, reject) => {
                db.execute(
                    query,
                    function (err, results) {
                        return err ? reject(err) : resolve(results)
                    }
                );
            })
        case 'employee':
            query = 'SELECT `title`,  FROM `role` WHERE id = ? '
    };



};

const addX = (table, obj) => {
    let query;

    switch (table) {
        case 'department':
            const { id, name } = obj;
            query = 'INSERT INTO `department` (`id`, `dept_name`) VALUES (?, ?)';
            data = [id, name]
            break;
        case 'role':
            const { role_id, title, salary, department_id } = obj;
            query = 'INSERT INTO `role`(`id`, `title`, `salary`, `department_id`) VALUES (?,?,?,?)';
            data = [role_id, title, salary, department_id]
            break;
        case 'employee':
            const { employee_id, first_name, last_name, role_idPK, manager_id } = obj;
            query = 'INSERT INTO `employee`(id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)';
            data = [employee_id, first_name, last_name, role_idPK, manager_id]
    };

    return new Promise((resolve, reject) => {

        db.execute(
            query,
            data,
            function (err) {
                return err ? reject(err) : resolve(console.log(`Added!`))
            }
        );
    })
};

const updateEmployeeRole = async (id, role) => {
    return new Promise((resolve, reject) => {
        db.execute(
            'UPDATE `employee` SET `role_id` = ? WHERE `id` = ?',
            [role, id],
            function (err) {
                return err ? reject(err) : resolve(console.log(`Updated role for Employee number ${id}`))
            }
        );
    })

};


module.exports = { selectAllX, addX, viewName, updateEmployeeRole }
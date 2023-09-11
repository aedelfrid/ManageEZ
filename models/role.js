const uuid = require('uuid')

class role {
    constructor(title, salary, department_id) {
        this.id = uuid.v4();
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }
};

module.exports = role
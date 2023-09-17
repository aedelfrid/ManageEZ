const uuid = require('uuid')

class employee {
    constructor(first_name, last_name, role_id, manager_id) {
        this.employee_id = uuid.v4();
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_idPK = role_id;
        this.manager_id = manager_id;
    };
};


module.exports = employee
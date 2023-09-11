const uuid = require('uuid')

class department {
    constructor(name) {
        this.id = uuid.v4();
        this.name = name
    };
};

module.exports = department
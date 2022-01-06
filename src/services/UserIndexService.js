const knex = require('../database');

module.exports = {
    async execute() {
        const result = await knex('users');
        return result;
    }
}
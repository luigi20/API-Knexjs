const knex = require('../database');
module.exports = {
    async execute(username) {
        const createUser = await knex('users').insert({ username: username });
        return createUser;
    }
}
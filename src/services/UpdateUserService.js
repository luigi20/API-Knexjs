const knex = require('../database');
module.exports = {
    async execute(username, id) {
        const updatedUser = await knex('users').where('id', ' =', id).update({ username: 'username' });
        return updatedUser;
    }
}
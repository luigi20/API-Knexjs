const knex = require('../database');
module.exports = {
    async execute(title, user_id) {
        const result = await knex('projects').insert({ title: title, user_id: user_id });
        return result;
    }
}
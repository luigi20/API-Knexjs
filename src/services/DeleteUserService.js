const knex = require('../database');
module.exports = {
    async execute() {

        await knex('users')
            .where({ id })
            .update('deleted_at', new Date())
        // .del()

        return res.send()

    }
}
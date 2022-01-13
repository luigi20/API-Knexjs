const knex = require('../database');
module.exports = {
    async execute(id) {
        try {
            await knex('users')
                .where('id', '=', id)
                .del();
            return res.status(200).send("User Delete");
        } catch (err) {
            new Error(err.message)
        }

    }
}
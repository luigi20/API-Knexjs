const knex = require('../database');
module.exports = {
    async execute(user_id) {
        const query = knex('projects');
        if (user_id) {
            query.where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')
                .limit(5)
                .offset((page - 1) * 1)

        }
        const result = await query;
        return result;
    }
}
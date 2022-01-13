const { onUpdateTrigger } = require('../../../knexfile');
exports.up = function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments('id').primary;
        table.text('title').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
        table.integer('user_id')
            .references('id')
            .inTable('users')
            .notNullable()
            .onDelete('CASCADE')
    }).then(() => knex.raw(onUpdateTrigger('projects')))
};

exports.down = function (knex) {
    return knex.schema.dropTable('projects');
};

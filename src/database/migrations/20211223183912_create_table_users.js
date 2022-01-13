const { onUpdateTrigger } = require('../../../knexfile');
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.text('username').unique().notNullable();
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    }).then(() => knex.raw(onUpdateTrigger('users')))
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};

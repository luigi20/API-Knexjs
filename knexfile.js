// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "knex_test",
      user: "postgres",
      password: "4l9u2i7s"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};


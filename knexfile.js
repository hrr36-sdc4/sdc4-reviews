module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "reviews"
    },
    migrations: {
      directory: __dirname + "/database/migrations"
    },
    seeds: {
      directory: __dirname + "/database/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "reviews",
      user: "root",
      password: ""
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "reviews",
      user: "root",
      password: ""
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      directory: __dirname + "/database/seeds"
    }
  }
};

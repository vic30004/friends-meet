require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: "",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB || "meet",
    },
    seeds: {
      directory: __dirname + "/db/seed",
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "password",
      database: "recommendations",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.RDS_HOSTNAME,
      port: process.env.RDS_PORT,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      name: process.env.RDS_DB_NAME,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds/production",
    },
    useNullAsDefault: true,

    pool: {
      min: 2,
      max: 10,
    },
  },
};

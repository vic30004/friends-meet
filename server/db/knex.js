const environment = process.env.NODE_ENV || "development"; // if something else isn't setting ENV, use development

const knexfile = require("../knexfile")[environment];
const knex = require("knex")(knexfile);
module.exports = knex;
exports.up = function (knex) {
  return knex.schema.createTable("meetings", (table) => {
    table.increments("id").primary();
    table.string("link").unique();
    table.timestamps(true, true);
    table
      .integer("ownerId")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("meetings");
};

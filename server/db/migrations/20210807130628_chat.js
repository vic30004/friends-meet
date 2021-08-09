exports.up = function (knex) {
    return knex.schema.createTable("chat", (t) => {
      t.increments("id").primary();
      t
        .integer("meetingId")
        .references("id")
        .inTable("meetings")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("chat");
  };
  
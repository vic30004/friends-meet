exports.up = function (knex) {
  return knex.schema.createTable("meeting_room", (t) => {
    t.increments("id").primary();
    t.integer("userId")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    t.integer("meetingId")
      .references("id")
      .inTable("meetings")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("meeting_room");
};

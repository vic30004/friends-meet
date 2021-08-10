exports.up = function (knex) {
    return knex.schema.createTable("comments", (t) => {
      t.increments("id").primary();
      t.string("message");
      t.timestamps(true, true);
      t.integer("ownerId")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("meetingUsersId")
        .references("id")
        .inTable("meeting_users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("chatId")
        .references("id")
        .inTable("chat")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("comments");
  };
  
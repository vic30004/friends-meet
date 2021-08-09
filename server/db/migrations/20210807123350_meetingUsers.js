
exports.up = function(knex) {
  return knex.schema.createTable('meetingUsers', t=>{
      t.increments('id').primary();
      t.string('name');
      t.string('email'); 
      t     
      .integer("meetingId")
      .references("id")
      .inTable("meetings")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('meetingUsers')
};

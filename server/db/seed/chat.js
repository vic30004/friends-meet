
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {id: 1, meetingId: 1},
        {id: 2, meetingId: 2},
        {id: 3, meetingId: 3}
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meetingUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetingUsers').insert([
        {id: 1, name: 'sam', email:'sam@gmail.com', meetingId:1},
        {id: 2, name: 'james', email:'james@gmail.com', meetingId:1},
        {id: 3, name: 'jane', email:'jane@gmail.com', meetingId:2},
        {id: 4, name: 'henry', email:'henry@gmail.com', meetingId:2},
        {id: 5, name: 'paul', email:'paul@gmail.com', meetingId:3},
      ]);
    });
};

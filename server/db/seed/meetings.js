
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {id: 1, link: 'http://friend-meet.com/meet1', ownerId:1},
        {id: 2, link: 'http://friend-meet.com/meet2', ownerId:2},
        {id: 3, link: 'http://friend-meet.com/meet3', ownerId:3}
      ]);
    });
};

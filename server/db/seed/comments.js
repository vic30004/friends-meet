
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, message: 'hello', ownerId:1, meetingUsersId:null, chatId:1},
        {id: 2, message: 'hey', ownerId:null, meetingUsersId:1, chatId:1},
        {id: 3, message: 'wassup', ownerId:null,  meetingUsersId:2, chatId:1},
        {id: 4, message: 'hello', ownerId:2,  meetingUsersId:null,  chatId:2},
        {id: 5, message: 'bye', ownerId:3,  meetingUsersId:null,  chatId:3},
      ]);
    });
};

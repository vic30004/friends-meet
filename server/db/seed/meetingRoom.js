exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("meetingRoom")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("meetingRoom").insert([
        { id: 1, userId: 2, meetingId: 1 },
        { id: 2, userId: 3, meetingId: 2 },
        { id: 3, userId: 1, meetingId: 3 },
      ]);
    });
};

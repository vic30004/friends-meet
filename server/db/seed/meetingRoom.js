exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("meeting_room")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("meeting_room").insert([
        { id: 1, userId: "1", meetingId: "1" },
        { id: 2, userId: "2", meetingId: "1" },
        { id: 3, userId: "3", meetingId: "2" },
      ]);
    });
};

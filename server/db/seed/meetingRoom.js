exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("meeting_room")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("meeting_room").insert([
        { id: 1, memberId: "1", ownerId: "1", meetingId: "1" },
        { id: 2, memberId: "2", ownerId: "1", meetingId: "1" },
        { id: 3, memberId: "3", ownerId: "2", meetingId: "2" },
      ]);
    });
};

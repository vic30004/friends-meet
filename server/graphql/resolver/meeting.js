const { randomIdGen } = require("../../helper/helper");

exports.meeting = async (input, db) => {
  const { id } = input;
  const meeting = await db("meetings").where({ id });
  if (meeting.length < 1) {
    throw new Error("Meeting does not exist");
  }
  return {
    ...meeting[0],
  };
};

exports.createMeeting = async (input, db) => {
  const { ownerId } = input;

  const linkId = randomIdGen();
  const link = `http://localhost:4000/${linkId}`;

  const meeting = await db("meetings").insert({ link, ownerId }).returning("*");
  const meetingId = meeting[0].id;

  await db("chat").insert({ meetingId });

  return { ...meeting[0] };
};

exports.getUsers = async (meetings, db) => {
  const meetingId = meetings.id;
  return await db("meeting_users").where({
    meetingId,
  });
};

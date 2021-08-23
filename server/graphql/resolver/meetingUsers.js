const { emailCheck } = require("../../helper/helper");

exports.meetingUsers = async (input, db) => {
  const { meetingId } = input;
  return await db("meeting_users").where({ meetingId });
};

exports.addUserToMeeting = async (input, db) => {
  const { email, meetingId } = input;
  const checkIfUserInMeeting = await db("meeting_users").where({
    email,
    meetingId,
  });
  if (checkIfUserInMeeting.length > 0) {
    return new Error("User is already in the meeting");
  }

  if (emailCheck(email)) {
    const user = await db("meeting_users")
      .insert({ email, meetingId })
      .returning("*");
    return { ...user[0] };
  }
  return new Error("Please add a valid email");
};

exports.updateMeetingUserName = async (input, db) => {
  const { email, name, meetingId } = input;

  if (email) {
    if (!emailCheck(email)) {
      return new Error("Please add a valid email");
    }

    const user = await db("meeting_users")
      .where({ meetingId, email })
      .update({ name })
      .returning("*");
    return { ...user[0] };
  }
};

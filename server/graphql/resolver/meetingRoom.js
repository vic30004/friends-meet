exports.meetingRoom = async (input, db) => {
  const { meetingId } = input;
  return await db("meeting_room").where({ meetingId });
};

exports.getOwner = async (meeting, db) => {
  const id = meeting.meetingId;
  const user = await db("users")
    .join("meetings", "users.id", "meetings.ownerId")
    .select("users.id", "users.name", "users.email")
    .where({ "meetings.ownerId": id });
  return { ...user[0] };
};

exports.getMember = async (meeting, db) => {
  const id = meeting.userId;
  const user = await db("meeting_users").where({ id });
  return { ...user[0] };
};

exports.addMember = async (input, db) => {
  const { email, meetingId } = input;

  const user = await db("meeting_users").where({ email, meetingId });
  if (user.length > 0) {
    try {
      const userId = user[0].id;
      const meetingUser = await db("meeting_room").where({ meetingId, userId });
      if (meetingUser.length > 0) {
        return new Error("You are already in the room");
      }
      const addedUser = await db("meeting_room")
        .insert({ userId, meetingId })
        .returning("*");
      return { ...addedUser[0] };
    } catch (error) {
      console.log(error);
      return new Error("Something went wrong");
    }
  }
  return new Error("oops, it looks like you were not invited to this meeting.");
};

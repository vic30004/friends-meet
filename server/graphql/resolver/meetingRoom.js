const { constants } = require("../constants");

exports.meetingRoom = async (input, db) => {
  const { meetingId } = input;
  return await db("meeting_room").where({ meetingId });
};

exports.getOwner = async (meeting, db) => {
  const id = meeting.ownerId;
  const meetingId = meeting.meetingId;
  if (id) {
    const user = await db("users").where({ id });
    return { ...user[0] };
  }
  const usersMeeting = await db("meetings").where({ id: meetingId });
  const userId = usersMeeting[0].id;
  const user = await db("users").where({ id: userId });
  return { ...user[0] };
};

exports.getMember = async (meeting, db) => {
  const id = meeting.memberId;
  if (id) {
    const user = await db("meeting_users").where({ id });
    return { ...user[0] };
  }
};

exports.addMember = async (input, db, pubsub) => {
  const { email, meetingId } = input;
  let memberId;
  let ownerId;
  let user = await db("meeting_users").where({ email, meetingId });
  if (user.length === 0) {
    user = await db("users").where({ email });
    memberId = null;
    ownerId = user[0].id;
  }
  console.log(user);
  if (user.length > 0) {
    try {
      if (ownerId) {
        const meeting = await db("meetings").where({ ownerId, id: meetingId });
        console.log(meeting);
        if (meeting.length === 0) {
          return new Error(
            "oops, it looks like you were not invited to this meeting."
          );
        }
        const meetingUser = await db("meeting_room").where({
          meetingId,
          ownerId,
        });
        console.log(meetingUser);
        if (meetingUser.length > 0) {
          return new Error("You are already in the room");
        }
        const addedUser = await db("meeting_room")
          .insert({ ownerId, meetingId })
          .returning("*");
        pubsub.publish(constants.MEMBER_JOINED, {
          memberJoined: { ...user[0] },
        });
        return { ...addedUser[0] };
      }
      memberId = user[0].id;
      const meetingUser = await db("meeting_room").where({
        meetingId,
        memberId,
      });
      if (meetingUser.length > 0) {
        return new Error("You are already in the room");
      }
      const addedUser = await db("meeting_room")
        .insert({ memberId, meetingId })
        .returning("*");
      pubsub.publish(constants.MEMBER_JOINED, {
        memberJoined: { ...user[0] },
      });
      return { ...addedUser[0] };
    } catch (error) {
      console.log(error);
      return new Error("Something went wrong");
    }
  }
  return new Error("oops, it looks like you were not invited to this meeting.");
};

exports.removeMember = async (input, db, pubsub) => {
  const { meetingId, memberId, ownerId } = input;
  try {
    if (ownerId) {
      await db("meeting_room").where({ meetingId, ownerId }).del();
      return "A user left the meeting";
    }
    let test = await db("meeting_room").where({ meetingId, memberId });
    await db("meeting_room").where({ meetingId, memberId }).del();
    pubsub.publish(constants.MEMBER_LEFT, {
      memberLeft: `A user left the meeting`,
    });
    return "A user left the meeting";
  } catch (error) {
    return new Error("Something went wrong");
  }
};

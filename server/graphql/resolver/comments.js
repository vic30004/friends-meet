const { constants } = require("../constants");

exports.comments = async (input, db) => {
  const { chatId } = input;
  return await db("comments").where({ chatId });
};

exports.addComment = async (input, db, pubsub) => {
  const { message, chatId } = input;
  let ownerId = input.ownerId ? input.ownerId : null;
  let meetingUsersId = input.meetingUsersId ? input.meetingUsersId : null;

  const comment = await db("comments")
    .insert({
      message,
      ownerId,
      meetingUsersId,
      chatId,
    })
    .returning("*");
  pubsub.publish(constants.NEW_COMMENT, { newComment: { ...comment[0] } });
  return { ...comment[0] };
};

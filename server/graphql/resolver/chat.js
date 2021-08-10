exports.chat = async (input, db) => {
  const table = await db("chat").where({ meetingId: input.id });
  return { ...table[0] };
};

exports.getComments = async (chat, db) => {
  const chatId = chat.id;
  return await db("comments").where({ chatId });
};

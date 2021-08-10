exports.meetingRoom = async (input, db) => {
  const { meetingId } = input;
  return await db("meetingRoom").where({ meetingId });
  
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
  const user = await db("meetingUsers").where({ id });
  return { ...user[0] };
};

exports.addMember = async (email,db) =>{
    
}
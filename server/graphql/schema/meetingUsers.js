const MeetingUsers = `
type MeetingUsers{
    id:ID!,
    name:String, 
    email: String,
    meetingId:ID,
}
input MeetingUsersId {
    meetingId:ID
}
type Query{
    meetingUsers(input:MeetingUsersId!): [MeetingUsers]
}

input AddUserToMeeting{
    email:String!
    meetingId:ID!
}

input UpdateUser{
    email:String
    name:String
    meetingId: ID!
}

type Mutation{
    addUserToMeeting(input: AddUserToMeeting!): MeetingUsers
    updateMeetingUserName(input: UpdateUser): MeetingUsers
}
`;

module.exports = MeetingUsers;

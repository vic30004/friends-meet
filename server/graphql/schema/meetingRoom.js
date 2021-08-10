const MeetingRoom = `
type MeetingRoom{
    id:ID! 
    member: MeetingUsers
    owner: User
    meetingId: ID!
}

input MeetingRoomInput{
    meetingId: ID!
}

type Query{
    meetingRoom(input: MeetingRoomInput): [MeetingRoom!]
}

input Member{
    meetingId: ID!
    email: String!
}
type Mutation{
    addMember(input:Member):MeetingRoom
    removeMember(input:Member): String
}
`;

module.exports = MeetingRoom;

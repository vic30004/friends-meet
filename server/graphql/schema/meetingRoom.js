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
    email: String!
}
type Mutation{
    addMember(input:Member):MeetingUsers
    removeMember(input:Member): String
}
`;

module.exports = MeetingRoom
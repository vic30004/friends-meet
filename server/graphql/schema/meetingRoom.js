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
    meetingId: ID
    email: String!
}

input RemoveMember{
    meetingId: ID!
    memberId: ID
    owner: ID
}
type Mutation{
    addMember(input:Member):MeetingRoom
    removeMember(input:RemoveMember): String
}

type Subscription{
    memberJoined: String
    memberLeft: String
}
`;

module.exports = MeetingRoom;

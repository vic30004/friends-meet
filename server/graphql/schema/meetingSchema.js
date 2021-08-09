const Meeting = `
type Meeting{
    id:ID!, 
    users: [MeetingUsers],
    link: String, 
    ownerId: ID!
}

input MeetingId{
    id: ID!
}
type Query{
    meeting(input:MeetingId!): Meeting
}

input createMeeting{
    ownerId: ID!
}

type Mutation{
    createMeeting(input: createMeeting!): Meeting
}
`;

module.exports = Meeting;

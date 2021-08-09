const Chat = `
type Chat{
     id: ID!,
    comments: [Comments],
    meetingId: ID,
}

input MeedingId{
    id:ID!
}
type Query{
    chat(input: MeedingId!): Chat
}
`;

module.exports = Chat;

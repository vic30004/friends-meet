const Chat = `
type Chat{
     id: ID!,
    comments: [Comments],
    meetingId: ID   
}

type Query{
    chat: [Chat]
}
`;

module.exports = Chat;

const Comments = `
    type Comments{
        id:ID!,
        message: String!,
        date:String, 
        userId: ID!
    }

    type Query{
        comments:[Comments]! 
    }
`;

module.exports = Comments;

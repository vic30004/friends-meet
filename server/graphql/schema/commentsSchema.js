const Comments = `
    interface Comments{
        id:ID!,
        message: String!,
        created_at:String
        chatId: ID
    }

    type OwnerComments implements Comments{
        id:ID!,
        message: String!,
        created_at:String
        ownerId: ID 
        chatId: ID
    }

    type MeetingUserComment implements Comments{
        id:ID!,
        message: String!,
        created_at:String
        meetingUsersId: ID 
        chatId: ID
    }

    input CommentsInput{
        chatId: ID!
    }

    type Query{
        comments(input:CommentsInput!):[Comments]
    } 

    input AddComment {
        message: String!
        ownerId:ID
        meetingUsersId: ID
        chatId: ID!
    }

    type Mutation{
        AddComment(input: AddComment): Comments
    }

    type Subscription {
        newComment: Comments
    }
`;

module.exports = Comments;

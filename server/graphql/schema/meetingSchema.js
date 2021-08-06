const Meeting= `
type Meeting{
    id:ID!, 
    users: [User]!,
    link: String, 
    ownerId: ID!
}

type Query{
    meeting(id:ID!): Meeting
}
`

module.exports=Meeting
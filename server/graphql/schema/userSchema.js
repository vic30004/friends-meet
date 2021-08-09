const User = `
  type User {
    id: ID!
    email: String!
    name: String
  }
type Query{
    users:[User]
}

input AddUser{
  email:String!, 
  name:String!,
}

type Mutation {
  addUser(input: AddUser): User!
}
`;

module.exports = User;

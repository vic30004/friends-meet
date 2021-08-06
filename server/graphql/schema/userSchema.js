const User = `
  type User {
    id: ID!
    email: String!
    name: String
  }
type Query{
    users:[User]
}

`;

module.exports = User;

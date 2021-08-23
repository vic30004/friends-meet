import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUserMutation($addUserInput: AddUser) {
    addUser(input: $addUserInput) {
      id
      email
      name
    }
  }
`;

export const ADDUSER = gql`
  input AddUser {
    email: String!
    name: String!
  }
`;

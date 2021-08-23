import gql from "graphql-tag";

export const ADD_USER_TO_MEETING = gql`
  mutation AddUserToMeetingMutation($addUserToMeetingInput: AddUserToMeeting!) {
    addUserToMeeting(input: $addUserToMeetingInput) {
      id
      name
      email
    }
  }
`;

export const UPDATE_USER_NAME = gql`
  mutation UpdateMeetingUserNameMutation(
    $updateMeetingUserNameInput: UpdateUser
  ) {
    updateMeetingUserName(input: $updateMeetingUserNameInput) {
      id
      name
    }
  }
`;

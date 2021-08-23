import gql from "graphql-tag";

export const CREATE_MEETING = gql`
  mutation CreateMeetingMutation($createMeetingInput: createMeeting!) {
    createMeeting(input: $createMeetingInput) {
      id
      link
      ownerId
    }
  }
`;

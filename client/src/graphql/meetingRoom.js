import gql from "graphql-tag";

export const JOIN_MEETING = gql`
  subscription Subscription {
    memberJoined {
      id
      name
      email
      meetingId
    }
  }
`;

export const GET_MEETING_ROOM_MEMBERS = gql`
  query Query($meetingRoomInput: MeetingRoomInput) {
    meetingRoom(input: $meetingRoomInput) {
      id
      member {
        id
        name
        email
      }
    }
  }
`;

export const ADD_USER_TO_MEETING_ROOM = gql`
  mutation Mutation($addMemberInput: Member) {
    addMember(input: $addMemberInput) {
      id
    }
  }
`;

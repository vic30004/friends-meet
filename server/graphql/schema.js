const { gql } = require("apollo-server");
const User = require("./schema/userSchema");
const Meeting = require("./schema/meetingSchema");
const Comments = require("./schema/commentsSchema");
const Chat = require("./schema/ChatSchema");
const MeetingUsers = require("./schema/meetingUsers");

const schema = gql`
  ${User}
  ${Meeting}
  ${MeetingUsers}
  ${Comments}
  ${Chat}
`;

module.exports = schema;

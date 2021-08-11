const { PubSub } = require("graphql-subscriptions");
const { users, addUser } = require("./resolver/user");
const { meeting, createMeeting, getUsers } = require("./resolver/meeting");
const { chat, getComments } = require("./resolver/chat");
const {
  meetingUsers,
  addUserToMeeting,
  updateMeetingUserName,
} = require("./resolver/meetingUsers");
const { constants } = require("./constants");
const { comments } = require("./resolver/comments");
const {
  meetingRoom,
  getOwner,
  getMember,
  addMember,
  removeMember,
} = require("./resolver/meetingRoom");
const pubsub = new PubSub();

const resolvers = {
  Query: {
    async users(_, __, { db }) {
      return users(db);
    },
    async meeting(_, { input }, { db }) {
      return meeting(input, db);
    },
    async chat(_, { input }, { db }) {
      return chat(input, db);
    },

    async meetingUsers(_, { input }, { db }) {
      return meetingUsers(input, db);
    },

    async comments(_, { input }, { db }) {
      return comments(input, db);
    },
    async meetingRoom(_, { input }, { db }) {
      return meetingRoom(input, db);
    },
  },
  Meeting: {
    async users(meetings, _, { db }) {
      return getUsers(meetings, db);
    },
  },
  Comments: {
    __resolveType(comment) {
      if (comment.meetingUsersId) return `MeetingUserComment`;
      return `OwnerComments`;
    },
  },
  Chat: {
    async comments(chat, _, { db }) {
      return getComments(chat, db);
    },
  },
  MeetingRoom: {
    async owner(meeting, _, { db }) {
      return getOwner(meeting, db);
    },
    async member(meeting, _, { db }) {
      return getMember(meeting, db);
    },
  },
  Mutation: {
    async addUser(_, { input }, { db }) {
      return addUser(input, db);
    },
    async createMeeting(_, { input }, { db }) {
      return createMeeting(input, db);
    },
    async addUserToMeeting(_, { input }, { db }) {
      return addUserToMeeting(input, db);
    },

    async updateMeetingUserName(_, { input }, { db }) {
      return updateMeetingUserName(input, db);
    },
    async AddComment(_, { input }, { db }) {
      return addComment(input, db, pubsub);
    },

    async addMember(_, { input }, { db }) {
      return addMember(input, db, pubsub);
    },
    async removeMember(_, { input }, { db }) {
      return removeMember(input, db, pubsub);
    },
  },
  Subscription: {
    newComment: {
      subscribe: () => pubsub.asyncIterator([constants.NEW_COMMENT]),
    },
    memberJoined: {
      subscribe: () => pubsub.asyncIterator([constants.MEMBER_JOINED]),
    },
    memberLeft: {
      subscribe: () => pubsub.asyncIterator([constants.MEMBER_LEFT]),
    },
  },
};

module.exports = resolvers;

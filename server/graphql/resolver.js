const { emailCheck, randomIdGen } = require("../helper/helper");
const { PubSub } = require("graphql-subscriptions");

const pubsub = new PubSub();
const NEW_COMMENT = "NEW_COMMENT";
const resolvers = {
  Query: {
    async users(_, __, { db }) {
      return await db("users");
    },
    async meeting(_, { input }, { db }) {
      const { id } = input;
      const meeting = await db("meetings").where({ id });
      if (meeting.length < 1) {
        throw new Error("Meeting does not exist");
      }
      return {
        ...meeting[0],
      };
    },
    async chat(_, { input }, { db }) {
      const table = await db("chat").where({ meetingId: input.id });
      return { ...table[0] };
    },

    async meetingUsers(_, { input }, { db }) {
      const { meetingId } = input;
      return await db("meetingUsers").where({ meetingId });
    },

    async comments(_, { input }, { db }) {
      const { chatId } = input;
      return await db("comments").where({ chatId });
    },
  },
  Meeting: {
    async users(meetings, _, { db }) {
      const meetingId = meetings.id;
      const meetingUsers = await db("meetingUsers").where({
        meetingId,
      });
      return meetingUsers;
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
      const chatId = chat.id;
      const comments = await db("comments").where({ chatId });
      return comments;
    },
  },
  Mutation: {
    async addUser(_, { input }, { db }) {
      const { email, name } = input;
      if (emailCheck(email)) {
        const user = await db("users").insert({ email, name }).returning("*");
        return { ...user[0] };
      }
      return new Error("Please add a valid email");
    },
    async createMeeting(_, { input }, { db }) {
      const { ownerId } = input;

      const linkId = randomIdGen();
      const link = `http://localhost:4000/${linkId}`;

      const meeting = await db("meetings")
        .insert({ link, ownerId })
        .returning("*");
      const meetingId = meeting[0].id;

      await db("chat").insert({ meetingId });

      return { ...meeting[0] };
    },
    async addUserToMeeting(_, { input }, { db }) {
      const { email, meetingId } = input;

      const checkIfUserInMeeting = await db("meetingUsers").where({
        email,
        meetingId,
      });
      if (checkIfUserInMeeting.length > 0) {
        return new Error("User is already in the meeting");
      }

      if (emailCheck(email)) {
        const user = await db("meetingUsers")
          .insert({ email, meetingId })
          .returning("*");
        return { ...user[0] };
      }
      return new Error("Please add a valid email");
    },

    async updateMeetingUserName(_, { input }, { db }) {
      const { email, name, id } = input;

      if (email) {
        if (!emailCheck(email)) {
          return new Error("Please add a valid email");
        }

        const user = await db("meetingUsers")
          .where({ id, email })
          .update({ name })
          .returning("*");
        return { ...user[0] };
      }
    },
    async AddComment(_, { input }, { db }) {
      const { message, chatId } = input;
      let ownerId = input.ownerId ? input.ownerId : null;
      let meetingUsersId = input.meetingUsersId ? input.meetingUsersId : null;

      const comment = await db("comments")
        .insert({
          message,
          ownerId,
          meetingUsersId,
          chatId,
        })
        .returning("*");
      pubsub.publish(NEW_COMMENT, { newComment: { ...comment[0] } });
      return { ...comment[0] };
    },
  },
  Subscription: {
    newComment: {
      subscribe: () => pubsub.asyncIterator([NEW_COMMENT]),
    },
  },
};

module.exports = resolvers;

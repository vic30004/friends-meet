const userResolver = require("./resolver/user");
const meetingResolver = require("./resolver/meeting");
const meeting = meetingResolver.meeting;
const resolvers = {
  Query: {
    users: () => userResolver.users(),
    meeting: (parent, args) => meeting(parent, args),
  },
};

module.exports = resolvers;

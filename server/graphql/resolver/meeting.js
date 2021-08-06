const mockMeeting = [
  {
    id: 1,
    users: [
      { id: 1, email: "victor@gmail.com", name: "" },
      { id: 2, email: "vic@gmail.com", name: "" },
    ],
    link: "http://linktomeeting.com/1",
    ownerId: 1,
  },
  {
    id: 2,
    users: [
      { id: 1, email: "victor@gmail.com", name: "" },
      { id: 2, email: "vic@gmail.com", name: "" },
    ],
    link: "http://linktomeeting.com/1",
    ownerId: 2,
  },
];

exports.meeting = (parent, args) => {
  return mockMeeting.find((meeting) => meeting.id === +args.id);
};

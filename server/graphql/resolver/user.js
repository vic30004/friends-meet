const userArr = [{ id: 1, email: "victor@gmail.com", name: "" }];

const users = () => userArr;

const addUser = ( args) => {
  userArr.push({ id: 2, email: args.id, name: args.name });
  const user = userArr.find((user) => user.id === 2);
  return user[0];
};

module.exports = { users, addUser };

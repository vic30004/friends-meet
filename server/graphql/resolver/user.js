const { emailCheck } = require("../../helper/helper");

exports.users = async (db) => {
  return await db("users");
};

exports.addUser = async (input, db) => {
  const { email, name } = input;
  if (emailCheck(email)) {
    const userExistCheck = await db("users").where({ email });
    if (userExistCheck.length > 0) {
      return { ...userExistCheck[0] };
    }
    const user = await db("users").insert({ email, name }).returning("*");
    return { ...user[0] };
  }
  return new Error("Please add a valid email");
};

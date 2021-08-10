const { emailCheck } = require("../../helper/helper");

exports.users = async (db) => {
  return await db("users");
};

exports.addUser = async (input, db) => {
  const { email, name } = input;
  if (emailCheck(email)) {
    const user = await db("users").insert({ email, name }).returning("*");
    return { ...user[0] };
  }
  return new Error("Please add a valid email");
};

 

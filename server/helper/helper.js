const { v4: uuidv4 } = require("uuid");

const emailCheck = (email) => {
  const re =
    /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;

  return re.test(email);
};

const randomIdGen = () => {
  return uuidv4();
};



module.exports = { emailCheck, randomIdGen };

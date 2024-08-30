const { user } = require("../../db");
const bcrypt = require("bcrypt");

const postUser = async (
  name,
  email,
  lastname,
  birthdate,
  password,
  phone,
  username,
  gender,
  profilePicture
) => {
  try {
    const salts = 10;
    const hashedPassword = await bcrypt.hash(password, salts);

    const newUser = await user.create({
      name,
      email,
      lastname,
      birthdate,
      password: hashedPassword,
      phone,
      username,
      gender,
      profilePicture,
    });
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = postUser;

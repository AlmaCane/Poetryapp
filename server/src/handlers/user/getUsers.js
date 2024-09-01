const { user } = require("../../db");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.findAll();
    if (!allUsers.length > 0) {
      return res.status(400).send("There are not users created yet");
    }
    return res.json(allUsers);
  } catch (error) {
    return res.status(400).json({ message: `error: ${error.message}` });
  }
};
module.exports = getAllUsers;

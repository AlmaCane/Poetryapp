const { posts } = require("../../db");

const newPostHandler = async (req, res) => {
  const { userId, content, images } = req.body;
  try {
    if (!userId | !content )return res.status(208).send("missing info");

  } catch (error) {
    return res.status(400).json({ message: `error: ${error.message}` });
  }
};

module.exports = newPostHandler;

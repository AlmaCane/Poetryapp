const { posts } = require("../../db");

const deletePostHandler = async (req, res) => {
  const { userId, postId } = req.body;
  try {
    if (!userId | !postId) return res.status(208).send("missing info");
    await posts.destroy({ where: { id: postId } });
    return res.send("post removed succesfully");
  } catch (error) {
    return res.status(400).json({ message: `error: ${error.message}` });
  }
};

module.exports = deletePostHandler;

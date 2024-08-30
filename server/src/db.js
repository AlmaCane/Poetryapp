const { Sequelize, or } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

//? SQL Connection
const { DB_USER, DB_PASSWORD, DB_HOST, DB } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`,
  { logging: false }
);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

//? Models relations
const { posts, user, user_posts, favorites, googleUser } = sequelize.models;

user.belongsToMany(posts, { through: { model: user_posts, unique: false } });
posts.belongsToMany(user, { through: { model: user_posts, unique: false } });

user.belongsToMany(posts, { through: favorites });
posts.belongsToMany(user, { through: favorites });

posts.hasMany(favorites, { foreignKey: "postsFavs" });

googleUser.hasMany(user_posts, { foreignKey: "googleUserPosts" });

module.exports = {
  ...sequelize.models,
  connection: sequelize,
};

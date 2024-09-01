const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.ENUM("Man", "Woman", "Non-binary", "Other"),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1, 30],
        is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [8, Infinity],
      },
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [6, 15],
      },
    },

    provider: {
      type: DataTypes.ENUM("google", "local"),
      allowNull: true,
      defaultValue: "local",
    },

    profilePicture: {
      type: DataTypes.STRING,
      defaultValue: "https://i.ibb.co/xDvWKR2/Admin-Profile-Picture.webp",
      allowNull: true,
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetTokenExpiration: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return user;
};

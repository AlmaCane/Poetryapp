const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const user_posts = sequelize.define(
    "user_posts",
    {
      // Puedes definir campos adicionales aquí si es necesario
      // Por ejemplo, si quieres agregar una columna para la fecha en que se creó la asociación:
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false, // Si no necesitas las columnas createdAt y updatedAt
    }
  );

  return user_posts;
};

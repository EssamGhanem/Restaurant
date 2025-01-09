const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Cart, {
      foreignKey: "userId",
      as: "carts",
      onDelete: "CASCADE", 
      onUpdate: "CASCADE",
    });
  };

  return User;
};

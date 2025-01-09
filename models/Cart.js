const { DataTypes } = require("sequelize");
const { User } = require("./User");
const db = require(".");

module.exports = (sequelize) => {
  const Cart = sequelize.define(
    "Cart",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["userId", "productId"],
        },
      ],
    }
  );

  Cart.associate = (models) => {
    Cart.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Cart.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Cart;
};

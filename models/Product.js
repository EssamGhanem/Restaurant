const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Description is optional
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Allows for values like 25.99
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // Default stock value is 0
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // URL for the product image
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Product.associate = (models) => {

    
    Product.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
      onDelete: "CASCADE", 
      onUpdate: "CASCADE",
    });
 
      Product.hasMany(models.Cart , {
        foreignKey: "productId",
        as: "carts",
        onDelete: "CASCADE", 
        onUpdate: "CASCADE",
      });

    
  };

  return Product;
};

const { Cart, User , Product } = require("../../models");

const createCart = async (req, res, next) => {
  
  const { userId, productId, quantity } = req.body;

  try {
    // Check if the product exists
    const product = await Product.findByPk(productId);
    if (!product ) {
      
      res.json({ error: "Product not found or no enough quantity " });
    }
    

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      res.json({ error: "User not found" });
    }

    // Check if the cart already contains this product
    const existingCart = await Cart.findOne({
      where: { userId, productId },
    });

    if (existingCart != null) {
      // If the product already exists in the cart, update the quantity
      existingCart.quantity += parseFloat(quantity);
      await existingCart.save();
      return res.json({ message: "Cart updated", cart: existingCart });
    } else {
      // If no existing cart, create a new cart entry
      const cart = await Cart.create({
        userId,
        productId,
        quantity:parseFloat(quantity),
      });
      return res.json({ message: "Product added to cart", cart });
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.json({ error: "Server Error " });
  }
};

module.exports = createCart;

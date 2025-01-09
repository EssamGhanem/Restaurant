const { Cart } = require("../../models");
const { Product } = require("../../models");

const getUserCart = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    // Get all cart items for the user
    const userCart = await Cart.findAll({
      where: { userId },
      include: [{ model: Product, as: 'product'}],
    });

    if (userCart.length === 0) {
      return res.status(404).json({ error: "Cart is empty" });
    }

    const products = userCart.map((cart) => {
      return { product: cart.product, quantity: cart.quantity };
    });
    return res.status(200).json({
      message: "Cart fetched successfully",
      userCart,
      products,
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = getUserCart;

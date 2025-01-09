const { Cart } = require("../../models");

const removeProductFromCart = async (req, res) => {
  try {
    const { cartItemId } = req.params;

    // Find the cart item by ID
    const cartItem = await Cart.findOne({ where: { id: cartItemId } });

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Remove the product from the cart
    await cartItem.destroy();

    return res.status(200).json({
      message: 'Product removed from cart successfully',
    });
  } catch (error) {
    console.error('Error removing from cart:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = removeProductFromCart;
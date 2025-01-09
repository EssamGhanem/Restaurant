const { Cart } = require("../../models");

const updateCart = async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const { quantity , userId } = req.body;
     

    if (!quantity) {
      return res.status(400).json({ error: 'Missing quantity' });
    }

    // Find the cart item by ID
    const cartItem = await Cart.findOne({ where: { id: cartItemId, userId } });

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Update the quantity of the product in the cart
    cartItem.quantity = quantity;
    await cartItem.save();

    return res.status(200).json({
      message: 'Cart item updated successfully',
      cartItem,
    });
  } catch (error) {
    console.error('Error updating cart:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = updateCart;
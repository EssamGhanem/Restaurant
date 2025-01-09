const { Cart , User } = require("../../models");

const checkout = async (req, res) => {

  try {

    const { userId } = req.params;
   
   
    const carts = await Cart.findAll({ where: { userId } });
    

  
    if (carts.length === 0) {
      return res.status(400).json({ message: 'No items in the cart to checkout' });
    }

    await Cart.destroy({ where: { userId } });

    return res.status(200).json({
      message: "Checkout successful ..",
    });


  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error during checkout" });
  }
};


module.exports = checkout;
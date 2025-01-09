const { Product } = require("../../models");

const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();

    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = deleteProduct;

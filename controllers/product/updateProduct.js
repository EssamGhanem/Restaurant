const { Product } = require('../../models')



const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price, stock, imageUrl } = req.body;

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update product fields
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    product.imageUrl = imageUrl || product.imageUrl;


    await product.save();

    return res.status(200).json({
      message: 'Product updated successfully',
      product,
    });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};


module.exports = updateProduct;

const {Product , Category} = require('../../models');


const getSingleProduct = async (req,res , next)=>{

  try {
    const { productId } = req.params;
    const product = await Product.findOne( {where:{id:productId}, include: [{ model: Category, as: 'category' }]});

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json({
      message: 'Product fetched successfully',
      product,
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return res.status(500).json({ error: 'Server error' });
  }


};


module.exports = getSingleProduct;


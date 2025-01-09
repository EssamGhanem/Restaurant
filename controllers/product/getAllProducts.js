const {Product , Category} = require('../../models');



const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll( {include: [{ model: Category, as: 'category' }]});
    return res.status(200).json({
      message: 'Products fetched successfully',
      products,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};




module.exports = getAllProducts ;

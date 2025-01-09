const {Product} = require('../../models');



const createProduct = async (req,res)=>{

  try {
    const { name, description, price, stock , categoryId } = req.body;
    let {imageUrl} = req.body

    if (!name || !price || !stock || !categoryId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if( !imageUrl || imageUrl === 'none' )
    {
      imageUrl = '/assets/food.png'
    }

    const newProduct =  await Product.create({
      name,
      description,
      price,
      stock,
      imageUrl,
      categoryId,
    });

    return res.status(201).json({
      message: 'Product created successfully',
      product: newProduct,
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({ error: 'Server error' });
  }


};

module.exports = createProduct;
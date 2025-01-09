const {Category} = require('../../models');



const updateCategory = async (req,res)=>{

  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    const  category = await  Category.findByPk( categoryId);
    if (!category) {
      return res.status(404).json({ error: 'category not found' });
    }

    // Update product fields
    category.name = name || category.name;

    await category.save();

    return res.status(200).json({
      message: 'category updated successfully',
      category,
    });
  } catch (error) {
    console.error('Error updating category:\n', error);
    return res.status(500).json({ error: 'Server error' });
  }

}

module.exports = updateCategory;
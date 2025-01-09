const {Category} = require('../../models');



const getAllCategory = async (req,res)=>{

  try {

  
    const  categories = await  Category.findAll();
    if (categories.length === 0) {
      return res.status(404).json({ message: 'there is no categories' });
    }



    return res.status(200).json({
      message: 'category updated successfully',
      categories,
    });
  } catch (error) {
    console.error('Error fetching category:\n', error);
    return res.status(500).json({ message: 'Server error' });
  }

}

module.exports = getAllCategory;
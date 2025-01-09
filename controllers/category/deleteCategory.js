const { Category } = require("../../models");

const deleteCategory = async (req, res) => {

  try {

    const { categoryId } = req.params;
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: "category not found" });
    }
  

    await category.destroy();

    return res.status(200).json({
      message: "Category deleted successfully",
    });


  } catch (err) {

    return res.status(500).json({ message: "Server error" });
  }
};


module.exports = deleteCategory;
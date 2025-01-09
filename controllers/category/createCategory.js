const {Category} = require('../../models');



const createCategory = async (req,res)=>{

  const {name} = req.body;
  if(!name){
    return res.status(400).json({message:"request missing category name"})
  }

  try{

  const newCategory = await Category.create({name});
   return res.status(200).json({message:"category created successfully..",New_Category:newCategory});
  }catch(err){
    return res.status(500).json({message:"server error"});
  }
  



};


module.exports = createCategory;
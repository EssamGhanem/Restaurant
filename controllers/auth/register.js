const { User } = require("../../models");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  const { fullName, phoneNumber, password } = req.body;

  const hashedPassword = await bcrypt.hash(password,10);
  const userExist =  await User.findOne({where:{phoneNumber}});
  if(userExist){
    return res.status(400).json({message:"User already exist..!"});
  }
  try {
    const user = await User.create({
      fullName,
      phoneNumber,
      password:hashedPassword,
    });
   
   return  res.json({message:"user created successfully", user});
  } catch (e) {
    console.log(e);
    return res.json({message:e.message });
  }
};

module.exports = register;

const { User } = require("../../models");
const bcrypt = require("bcrypt");
const JWT = require('jsonwebtoken')

const login = async (req,res, next)=>{

    const { phoneNumber ,password } = req.body;
    if(!phoneNumber || !password){
      return res.status(400).json({message:"missing fileds"});
    }
    const user = await User.findOne({where:{phoneNumber}});
    if(!user){
      return res.status(404).json({message:"user not found"});
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(404).json({message:"incorrect password"});;
    }

    const payload = {
      userId: user.id,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      
    };

    const accessToken = JWT.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: "10m",
    });


  res.status(201).json({
    message: " user Logged  in successfully ...!",
    token: accessToken,
    user:user
  });






};


module.exports = login;
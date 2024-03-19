const User = require('../models/user_model');

exports.usertype= async(req,res,next)=>{
    const email = req.cookies.username;
    const user = await User.findOne({email:email})
    req.type = user.role;
    req.user = user;
    next();
}


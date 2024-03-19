const User = require('../models/user_model');


const authentication = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    req.login=false;
    const user = await User.findOne({ email: username });

    if (!user) {
        return console.log('User not found');
    } else {
        if (user.password == password) {
            req.login = true;
        } else {
            console.log("Incorrect Password");
        }
    }
    next();
}


module.exports=authentication;



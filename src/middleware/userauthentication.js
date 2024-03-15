const User = require('../models/user_model');

const userauthentication = async(req,res,next)=>{
    try {
        const email = req.body.email;
        const user = await User.findOne({email : email});
    
        if (user) {
            window.alert('User already exists'); // Set a flash message
            return res.redirect('/signup'); 
        }
        console.log("hsdcahsdvc");
        next();
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = userauthentication;
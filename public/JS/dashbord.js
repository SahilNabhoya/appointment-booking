const User = require('../../src/models/user_model');
const email=req.cookies.username;
console.log(email);
const getUserByEmail = async(email)=>{
    await User.findOne({email:email});
} 

getUserByEmail(email)
    .then(user => {
        console.log(user); // Log the user object
    })
    .catch(error => {
        console.error("Error:", error); // Log any errors encountered
    });



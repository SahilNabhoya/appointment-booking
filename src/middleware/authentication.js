// const User = require('../models/user_model');

import User from "../models/user_model.js";
import Doctor from "../models/doctor_model.js";

const authentication = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    req.login = false;
    const user = await User.findOne({ email: username });
    const doctor = await Doctor.findOne({ email: username });

    if (!username || !password) {
        return res.send(
            '<script>alert("Enter Username And Password");</script>'
        );
    } else {
        if (!user && !doctor) {
            return console.log("User not found");
        } else {
            if (user && user.password === password) {
                req.login = true;
            } else if (doctor && doctor.password === password) {
                req.login = true;
            } else {
               return  console.log("Incorrect Password");
            }
        }
    }
    next();
};

// module.exports=authentication;
export default authentication;

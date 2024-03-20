// const User = require('../models/user_model');
import User from '../models/user_model.js';
import Doctor from '../models/doctor_model.js';

const usertype= async(req,res,next)=>{
    const email = req.cookies.username;
    const user = await User.findOne({email:email});
    const doctor = await Doctor.findOne({email:email});
    if (user) {
        req.type = 'patient'
        req.user = user;
    }else if (doctor) {
        req.type='doctor';
        req.user=doctor;
    }else{
      return res.send('<script>alert("Type Not Found");</script>'); 
    }
    next();
}
export default usertype;


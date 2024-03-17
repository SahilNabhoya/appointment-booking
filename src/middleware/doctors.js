const User = require('../models/user_model');

const doctors = async (req, res, next) => {
    let doctordata = await User.find({ role: 'doctor' });
    res.locals.doctordata = doctordata;
    next();
}
module.exports = doctors;


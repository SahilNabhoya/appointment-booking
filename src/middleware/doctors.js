// const User = require('../models/user_model');
import Doctor from '../models/doctor_model.js';

const doctors = async (req, res, next) => {
    let doctordata = await Doctor.find();
    res.locals.doctordata = doctordata;
    next();
}
// module.exports = doctors;
export default doctors;


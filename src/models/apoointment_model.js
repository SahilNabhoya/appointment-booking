
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    name: String,
    contact: Number,
    date: Date,
    time: String,
    doctor_name: String,
    user_id  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    doctor_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'doctor'
    },
});

const Appointments = mongoose.model("appointments", appointmentSchema);

export default Appointments;

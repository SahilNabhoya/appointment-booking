
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    name: String,
    contact: Number,
    date: Date,
    time: String,
    doctor_name: String,
});

const Appointments = mongoose.model("appointments", appointmentSchema);

export default Appointments;

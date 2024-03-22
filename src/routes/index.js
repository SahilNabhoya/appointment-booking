
import { Router } from "express";
const router = Router();
import { randomBytes}  from 'crypto';
import cookieParser from "cookie-parser";

// DATABASE
import connectDB from '../db/db.js';

// MODELS
import User from '../../src/models/user_model.js';
import Doctor from '../../src/models/doctor_model.js';
import Appointment from '../../src/models/apoointment_model.js';

// MIDDLEWARES
import authentication from '../middleware/authentication.js';
import userauthentication from '../middleware/userauthentication.js';
import doctors from "../middleware/doctors.js";
import usertype  from "../middleware/usertype.js";
import { log } from "console";


connectDB()

router.use(cookieParser());

function genertesessionID() {
    const buffer = randomBytes(16);
    const sessionID = buffer.toString('hex');
    return sessionID;
}

router.get("/",(req, res) => {
    res.render("home");
});

// Home
router.get("/home", (req, res) => {
    res.render("home");
});



// Dashbord
router.get("/dashbord",usertype, (req, res) => {
    res.render("dashbord",{
        isvalidrole : req.type,
        user:req.user
    });
});
router.get("/appointmentData",async(req,res)=>{
    const type=req.query.type;
    const id=req.query.id;
    
    if (type=='doctor') {
        const appointment = (await Appointment.find({_id:id})).map(appointment=>appointment);
        res.json(appointment);
    }else{
        const appointment = (await Appointment.find({_id:id})).map(appointment=>appointment);
        res.json(appointment);
    }
})

// Book Appointment
router.get("/booking", (req, res) => {
    res.render("booking");
});
router.post("/book",async(req,res)=>{
    // console.log("Req user",req.session.user);
    // console.log("\nReq ",req.body);
     let new_Apoointment = new Appointment({
        user_id : req.session.user.user_id.toString(),
        name : req.body.name,
        contact : req.body.phone,
        date : req.body.date,
        time :  req.body.timezone,
        doctor_name : req.body.doctor
        // doctor_id :  req.body.doctor
    });
    // console.log("\nNEW appointent",new_Apoointment);
    try {
        const appointment = await new_Apoointment.save();
        console.log("Apoointment Booked");
        res.redirect('/dashbord');
    } catch (error) {
        console.log(error);
    }
});

router.get('/available-doctors', async(req,res)=>{
    try {
        const date = req.query.date;
        const time = req.query.time;
        const doctors = await Doctor.find();
        const required_doctors = await Appointment.find({date:date,time:time});
        
        
        // const doctor_name = doctors.map(doctors=>doctors._id);
        const doctor_name = doctors.map(doctors=>doctors.name);
        // const requiredDoctors = required_doctors.map(appointment=>appointment.doctor_id);
        const requiredDoctors = required_doctors.map(appointment=>appointment.doctor_name);
        // console.log('\nDoctor array : ',doctor_name,'\nBooked Doctors : ',requiredDoctors);
        
        const available_doctors = doctor_name.filter(doctor=>!requiredDoctors.includes(doctor));
        // let availabites = [];
        // available_doctors.forEach(doc_id=>{
        //     let  doctor = doctors.find(doc=>doc._id===doc_id);
        //     if (doctor) {
        //         availabites.push({
        //             id : doc_id.toString(),
        //             name : doctor.name
        //         });
        //     }
        // })
        // console.log("\navailable doctors : ",available_doctors);
        // console.log("\navaibilites : ",availabites);

        // res.json(availabites);
        res.json(available_doctors);
    } catch (error) {
        console.log(error);
    }
})


// service
router.get("/service", (req, res) => {
    res.render("service");
});

// contact
router.get("/contact", (req, res) => {
    res.render("contact");
});

// Doctor
router.get("/doctors", doctors, (req, res) => {
    res.render("doctors", {
        doctor: res.locals.doctordata,
    });
});

// About
router.get("/about", (req, res) => {
    res.render("about");
});

// Admin
router.get("/admin", (req, res) => {
    res.render("admin");
});

// signup Page
router.get("/signup", (req, res) => {
    res.render("signup");
});

// Doctor Signup
router.post("/doctor-signup", userauthentication, async (req, res) => {

    let newUser = new Doctor({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        spciality: req.body.specility,
        experience: req.body.experience,
        password: req.body.confirm_password
    });
    try {
        const user = await newUser.save();
        console.log("DataSaved Successfully");
        res.redirect('/login')
    } catch (error) {
        console.log(error);
    }
});

// Patient Signup
router.post("/patient-signup", userauthentication, async (req, res) => {

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        gender: req.body.gender,
        age: req.body.age,
        password: req.body.confirm_password
    });
    try {
        const user = await newUser.save();
        console.log("DataSaved Successfully");
        res.redirect('/login')
    } catch (error) {
        console.log(error);
    }
});

// Login
router.get("/login", (req, res) => {
    res.render("login");  
});
router.post('/logindata', authentication, (req, res) => {  
    if (req.login) {
        const sessionId = genertesessionID();
        res.cookie('sessionID',sessionId);
        // res.cookie('username',req.body.username );
       
        // res.cookie('userID',)
        req.session.user={
            user_id : req.user._id.toString(),
            email : req.user.email
        }
        res.redirect('/dashbord');
    }else{
        res.redirect('/login');
    }
});

// Logout
router.get('/logout',(req,res)=>{
    req.session.destroy( err=> {
        if (err) {
            console.log(err);
        }else{
            res.redirect('/home');
        }
    })
    // res.clearCookie('username');
    res.clearCookie('sessionID');
    // res.redirect('/home');
});

export default router;

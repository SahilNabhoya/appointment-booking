const router = require("express").Router();
const connectDB = require('../db/db.js')
const User = require('../../src/models/user_model.js')
const Appointment = require('../../src/models/apoointment_model.js');
const authentication = require('../middleware/authentication.js')
const userauthentication = require('../middleware/userauthentication.js');
const doctors = require("../middleware/doctors.js");
const cookie = require('cookie-parser');
const crypto = require('crypto');
const cookieParser = require("cookie-parser");
const { isAuth } = require("../middleware/is-Auth.js");
const { usertype } = require("../middleware/usertype.js");
const { log } = require("console");


connectDB()


router.use(cookieParser());
function genertesessionID() {
    const buffer = crypto.randomBytes(16);
    const sessionID = buffer.toString('hex');
    return sessionID;
}
router.get("/",(req, res) => {
    res.render("home", {
        title: "Home ",
    });
});

// Home
router.get("/home", (req, res) => {
    res.render("home", {
        title: "Home",
    });
});

// Login
router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login",
    });
   
});
router.post('/logindata', authentication, (req, res) => {
    
    if (req.login) {
        const sessionId = genertesessionID();
        const option = {
            httpOnly : true,
            secure:true
        }
        res.cookie('sessionID',sessionId,{maxAge : 60000},option);
        res.cookie('username',req.body.username );
        res.redirect('/dashbord');
    }else{
        res.redirect('/login');
    }
});

// Dashbord
router.get("/dashbord",usertype, (req, res) => {
    res.render("dashbord",{
        isvalidrole : req.type,
        user:req.user

    });
    // console.log(req.user);
});
// Booking
router.get("/booking", (req, res) => {
    res.render("booking", {
        title: "Book Appointment",
    });
});

// appointment
router.get("/appointment", (req, res) => {
    res.render("appointment", {
        title: "Appointment",
    });
});

// service
router.get("/service", (req, res) => {
    res.render("service", {
        title: "Service",
    });
});

// contact
router.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact",
    });
});

// Doctor
router.get("/doctors", doctors, (req, res) => {
    res.render("doctors", {
        title: "Doctors",
        doctor: res.locals.doctordata,
    });
});

// About
router.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
    });
});

// Admin
router.get("/admin", (req, res) => {
    res.render("admin", {
        title: "Admin",
    });
});

// signup Page
router.get("/signup", (req, res) => {
    res.render("signup", {
        title: "Sign Up",
    });
});


router.post("/book",async(req,res)=>{
    console.log(req.body);
    let new_Apoointment = new Appointment({
        name : req.body.name,
        contact : req.body.phone,
        date : req.body.date,
        time :  req.body.timezone,
        doctor_name :  req.body.doctor
    });
    try {
        const appointment = await new_Apoointment.save();
        console.log("APoointment Booked",appointment);
        res.redirect('/dashbord');
    } catch (error) {
        console.log(error);
    }
});
router.post("/signup", userauthentication, async (req, res) => {

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        gender: req.body.gender,
        age: req.body.age,
        role: req.body.role,
        password: req.body.confirm_password
    });
    try {
        const user = await newUser.save();
        console.log("DataSaved", user);
        res.redirect('/login')
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

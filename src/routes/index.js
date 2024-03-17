const router = require("express").Router();
const connectDB = require('../db/db.js')
const User = require('../../src/models/user_model.js')
const authentication = require('../middleware/authentication.js')
const userauthentication = require('../middleware/userauthentication.js');
const doctors = require("../middleware/doctors.js");

connectDB()

router.get("/", (req, res) => {
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
    res.render("login", {
        title: "logindata"
    })
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

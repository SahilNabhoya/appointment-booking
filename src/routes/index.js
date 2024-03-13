const router = require("express").Router();
const connectDB = require('../db/db.js')
const User = require('../../src/models/user_model.js')

connectDB()

router.get("/", (req, res) => {
    res.render("home", {
        title: "Home ",
    });
});

router.get("/home", (req, res) => {
    res.render("home", {
        title: "Home",
    });
});

router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login",
    });
});

router.get("/booking", (req, res) => {
    res.render("booking", {
        title: "Book Appointment",
    });
});

router.get("/appointment", (req, res) => {
    res.render("appointment", {
        title: "Appointment",
    });
});

router.get("/service", (req, res) => {
    res.render("service", {
        title: "Service",
    });
});

router.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact",
    });
});

router.get("/doctors", (req, res) => {
    res.render("doctors", {
        title: "Doctors",
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
    });
});

router.get("/admin", (req, res) => {
    res.render("admin", {
        title: "Admin",
    });
});
router.get("/signup", (req, res) => {
    res.render("signup", {
        title: "Sign Up",
    });
});
router.post("/signup", async (req, res) => {
  
    let newUser = new User({
        name : req.body.name,
        email : req.body.email,
        contact : req.body.contact,
        gender : req.body.gender,
        age : req.body.age,
        role : req.body.role,

    });
    try {
       const user =  await newUser.save();
        console.log("DataSaved", user);
        res.redirect('/login')
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

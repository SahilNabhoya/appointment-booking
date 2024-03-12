const router = require('express').Router();


const mongoose = require('mongoose');

const MONGODB_URL = "mongodb+srv://shineshore1612:Shine_1612@appointment.uyt9hhh.mongodb.net";
const DB_NAME = "LifrCare";

(async () => {
    try {
        await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})();


router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home '
    });
});

router.get('/home', (req, res) => {
    res.render('home', {
        title: 'Home'
    });
});

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

router.get('/booking', (req, res) => {
    res.render('booking', {
        title: 'Book Appointment'
    });
});

router.get('/appointment', (req, res) => {
    res.render('appointment', {
        title: 'Appointment'
    });
});

router.get('/service', (req, res) => {
    res.render('service', {
        title: 'Service'
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
});

router.get('/doctors', (req, res) => {
    res.render('doctors', {
        title: 'Doctors'
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

router.get('/admin', (req, res) => {
    res.render('admin', {
        title: 'Admin'
    });
});


module.exports = router;

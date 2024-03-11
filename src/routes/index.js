const router = require('express').Router();


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

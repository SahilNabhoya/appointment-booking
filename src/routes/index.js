const router = require('express').Router();

router.get('/', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.render('home.ejs', {
        title: 'Home Page.ejs'
    });
});

router.get('/home', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.render('home.ejs', {
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

router.get('/admin', (req, res) => {
    res.render('admin', {
        title: 'Apdmin'
    });
});


module.exports = router;

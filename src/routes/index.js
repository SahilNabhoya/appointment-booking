const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('home', {
        title : 'Home Page'
    });
});

router.get('/home', (req,res)=>{
    res.render('home', {
        title : 'Home'
    });
});

router.get('/login', (req,res)=>{
    res.render('login', {
        title : 'Login'
    });
});

router.get('/booking', (req,res)=>{
    res.render('booking', {
        title : 'Book Appointment'
    });
});

router.get('/appointment', (req,res)=>{
    res.render('appointments', {
        title : 'Appointment'
    });
});

router.get('/admin', (req,res)=>{
    res.render('admin', {
        title : 'Apdmin'
    });
});


module.exports = router;

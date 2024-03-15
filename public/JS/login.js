// // const express = require('express');
// // let log = express();
// // let authentication = require('../../src/middleware/authentication');

// var username = document.getElementById('username').value.trim();
// var password = document.getElementById('password').value.trim();
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // var validationMessage = document.getElementById('usernameNull');
//     // var validationPassword = document.getElementById('passwordNULL');
//     // if (username=null) {
//     //     validationMessage.style.display = 'block';
//     // } else {
//     //     validationMessage.style.display = 'none';
//     // }
//     // if (password !=null) {
//     //     validationPassword.style.display='none';
//     // }
//     // else{
//     //     validationPassword.style.display='block';
//     // }
//     if(validateUsername() && validatePassword()) {
//         // Form submission logic here
//         console.log('Form submitted successfully!');
//     }
// });

// function validateUsername() {
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     var isValid = emailRegex.test(username);
//     var validationMessage = document.getElementById('usernameValidation');
//     if (!isValid) {
//         validationMessage.style.display = 'block';
//     } else {
//         validationMessage.style.display = 'none';
//     }
//     return isValid;
// }

// function validatePassword() {
//     return password.length > 0;
// }


// log.use(authentication);
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Do something with the username and password (e.g., send them to a server)
    console.log('Username:', username);
    console.log('Password:', password);

    // You can also perform form validation here before sending data to the server
});
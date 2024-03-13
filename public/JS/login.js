document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // var validationMessage = document.getElementById('usernameNull');
    // var validationPassword = document.getElementById('passwordNULL');
    // if (username=null) {
    //     validationMessage.style.display = 'block';
    // } else {
    //     validationMessage.style.display = 'none';
    // }
    // if (password !=null) {
    //     validationPassword.style.display='none';
    // }
    // else{
    //     validationPassword.style.display='block';
    // }
    if(validateUsername() && validatePassword()) {
        // Form submission logic here
        console.log('Form submitted successfully!');
    }
});

function validateUsername() {
    var username = document.getElementById('username').value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = emailRegex.test(username);
    var validationMessage = document.getElementById('usernameValidation');
    if (!isValid) {
        validationMessage.style.display = 'block';
    } else {
        validationMessage.style.display = 'none';
    }
    return isValid;
}

function validatePassword() {
    var password = document.getElementById('password').value.trim();
    return password.length > 0;
}
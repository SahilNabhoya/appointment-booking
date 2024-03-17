function toggleSignupForm() {
    var userType = document.querySelector('input[name="userType"]:checked').value;
    var doctorSignupForm = document.getElementById('doctorSignupForm');
    var patientSignupForm = document.getElementById('patientSignupForm');

    if (userType === 'doctor') {
        doctorSignupForm.style.display = 'block';
        patientSignupForm.style.display = 'none';
    } else if (userType === 'patient') {
        doctorSignupForm.style.display = 'none';
        patientSignupForm.style.display = 'block';
    }
}
// Get form element and form fields
const form = document.getElementById('signup-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const contactField = document.getElementById('contact');
const genderField = document.getElementById('gender');
const ageField = document.getElementById('age');
const experience = document.getElementById('experience');
const roleField = document.getElementById('role');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm_password');

// Add event listener to form submission
form.addEventListener('submit', function (event) {
    // Check name field
    if (nameField.value === '') {
        alert('Please enter your name.');
        event.preventDefault();
        return;
    }

    // Check email field
    if (!isValidEmail(emailField.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    // Check contact number field
    if (!isValidContact(contactField.value)) {
        alert('Please enter a 10-digit contact number.');
        event.preventDefault();
        return;
    }

    // Check gender field
    if (genderField.value === '') {
        alert('Please select your gender.');
        event.preventDefault();
        return;
    }

    // Check age field
    if (!isValidAge(ageField.value)) {
        alert('Please enter a valid age.');
        event.preventDefault();
        return;
    }
    if (!isValidAge(experience.value)) {
        alert('Please enter a valid experience.');
        event.preventDefault();
        return;
    }


    // Check password field
    if (passwordField.value === '') {
        alert('Please enter a password.');
        event.preventDefault();
        return;
    }

    // Check confirm password field
    if (confirmPasswordField.value === '') {
        alert('Please confirm your password.');
        event.preventDefault();
        return;
    }

    // Check if passwords match
    if (passwordField.value !== confirmPasswordField.value) {
        alert('Passwords do not match. Please re-enter.');
        event.preventDefault();
        return;
    }
});

// Function to validate email address
function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate contact number
function isValidContact(contact) {
    // Regular expression for 10-digit contact number
    const contactRegex = /^\d{10}$/;
    return contactRegex.test(contact);
}

// Function to validate age
function isValidAge(age) {
    // Age should be a number between 0 and 100
    return !isNaN(age) && parseInt(age) >= 0 && parseInt(age) <= 100;
}



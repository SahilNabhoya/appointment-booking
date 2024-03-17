// const { login } = require('../middleware/authentication');


let login = true;
if (login) {
    document.getElementById('login').style.display = 'block';
    document.getElementById('not-login').style.display = 'none';
} else {
    document.getElementById('login').style.display = 'none';
    document.getElementById('not-login').style.display = 'block';
}


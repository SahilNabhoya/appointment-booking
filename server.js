const express = require('express');
const mainRouter = require('./src/routes/index');
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('/public'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mainRouter);

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
    if (err) {
        throw err.message;
    }
    else {
        console.log(`Server is listing on Port : ${port}`);
    }
})  
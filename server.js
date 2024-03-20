import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import mainRouter from './src/routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
    if (err) {
        throw err.message;
    } else {
        console.log(`Server is listening on Port : ${port}`);
    }
});

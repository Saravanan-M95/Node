import express from 'express';
import bodyParser from 'body-parser';
import crud from './crud.js';

const app = express();
const router = express.Router();
const PORT = 5050;

console.log(crud);

app.use(bodyParser.json());

app.use('/names',crud);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
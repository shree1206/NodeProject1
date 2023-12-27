//import packages
import express from 'express';
const app = express();
import dotenv from 'dotenv';

//load config
dotenv.config({ path: './config/.env' });

//load files
import connectDb from './config/db.js';

//connect db
connectDb();

//Env variables
const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE;

//routes
app.get('/', (req, res) => {
    res.send('welcome');
})

//server listen
app.listen(PORT, (err) => {
    if (!err) console.log(`connected on ${MODE} PORT ${PORT}`);
    else console.log(err);
});
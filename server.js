//import packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

//load config
dotenv.config({ path: './config/.env' });

//load files
import connectDb from './config/db.js';
import testRoutes from './routes/testRoutes.js';

//connect db
connectDb();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan());

//Env variables
const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE;

//routes
app.use('/api/v1/test', testRoutes);

//server listen
app.listen(PORT, (err) => {
    if (!err) console.log(`connected on ${MODE} PORT ${PORT}`.bgBlue);
    else console.log(err);
});
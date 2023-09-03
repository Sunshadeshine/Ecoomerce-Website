import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';  // used when we want to get url and details hitted on the app
import connectDB from './config/db.js';
import { default as routes } from './routes/index.js';
const app =express();
//confgure env
dotenv.config();



//database connection
connectDB();
//body-parser is inherited in express now
//middleware
app.use(express.json())
app.use(morgan('dev'))


// const db = require('./config/mongoose');
app.use('/', routes);
const port = process.env.PORT;
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`.bgRed.yellow);
    }

    console.log(`Server is running on port: ${port}`.bgCyan.black);
});




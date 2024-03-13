import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import moment from 'moment'
var bodyParser = require('body-parser')

const app = express();
dotenv.config();
app.use(bodyParser.json());
moment().format('DD MM YYYY hh:mm:ss');

const account = require("./routes/Account")
const comment = require("./routes/Comment")
const contribution = require("./routes/Contribution")
const faculty = require('./routes/Faculty')
const guest  =require('./routes/Guest')
const image = require('./routes/Image')
const role = require("./routes/Role")
const statistics = require("./routes/Statistics")



app.use(express.json())
app.use(cors({ credentials: "same origin" }));
app.use('/api',account)
app.use('/api',comment);
app.use('/api',contribution);
app.use('/api',faculty);
app.use('/api',guest);
app.use('/api',image);
app.use('/api',role);
app.use('/api',statistics);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
})
const port = process.env.PORT || 3000
app.listen(port ,()=>{
    console.log("Server is running on",port);
})
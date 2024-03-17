import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import moment from 'moment'
var path = require('path');
var authRouter = require('./routes/auth');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const app = express();
dotenv.config();
moment().format('DD MM YYYY hh:mm:ss');

app.use('/auth', authRouter);
//import "express-session" library
var session = require('express-session');
//set session timeout
const timeout = 10000 * 60 * 60 * 24;  // 24 hours (in milliseconds)
//config session parameters
app.use(session({
  secret: "coursework1640_private",  // Secret key for signing the session ID cookie
  resave: false,                     // Forces a session that is "uninitialized" to be saved to the store
  saveUninitialized: true,           // Forces the session to be saved back to the session store
  cookie: { maxAge: timeout },
}));
// config body-parser library (get data from client-side)
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const account = require("./routes/Account")
const comment = require("./routes/Comment")
const contribution = require("./routes/Contribution")
const faculty = require('./routes/Faculty')
const fileUpload = require('./routes/fileUpload')
const role = require("./routes/Role")
const statistics = require("./routes/Statistics")
const auth = require('./routes/auth')

app.use(express.json())
app.use(cors({ credentials: "same origin" }));
app.use('/api',account)
app.use('/api',comment);
app.use('/api',contribution);
app.use('/api',faculty);
app.use('/api',fileUpload);
app.use('/api',role);
app.use('/api',statistics);
app.use('/api',auth);
//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
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


//make session value can be accessible in view (place front of router url)
app.use((req, res, next) => {
    res.locals.name = req.session.name;
    next();
  });
//set user authorization for whole router 
const { checkSingleSession } = require('./middlewares/auth');
app.use('/admin', checkSingleSession);

const port = process.env.PORT || 3000
app.listen(port ,()=>{
    console.log("Server is running on",port);
})
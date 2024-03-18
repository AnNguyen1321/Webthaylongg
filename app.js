import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import moment from 'moment'
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const app = express();
const morgan = require('morgan');
dotenv.config();
moment().format('DD MM YYYY hh:mm:ss');

var session = require('express-session');
const timeout = 10000 * 60 * 60;  
app.use(session({
  secret: "coursework1640_private",  // Secret key for signing the session ID cookie
  resave: false,                     // Forces a session that is "uninitialized" to be saved to the store
  saveUninitialized: true,           // Forces the session to be saved back to the session store
  cookie: { maxAge: timeout },
}));

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
const authRouter = require('./routes/auth');

app.use(express.json())
app.use(cors({ credentials: "same origin" }));
app.use('/api',account)
app.use('/api',comment);
app.use('/api',contribution);
app.use('/api',faculty);
app.use('/api',fileUpload);
app.use('/api',role);
app.use('/api',statistics);
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false,
	}),
);
app.use(bodyParser.json());
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

app.use('/auth', authRouter);

app.use((req, res, next) => {
    res.locals.name = req.session.name;
    console.log(res.locals);
    next();
  });

//set user authorization for whole router 
const { checkAdminSession } = require('./middlewares/auth');
const { checkNameSession } = require('./middlewares/auth');
app.use('/admin', checkAdminSession);
app.use('/guest',checkAdminSession);
const port = process.env.PORT || 3000
app.listen(port ,()=>{
    console.log("Server is running on",port);
})
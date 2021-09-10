const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const app = express();
//DB config
const db = require('./config/keys').MongoURI;
const hostname = '0.0.0.0';
//passport config
require('./config/passport')(passport);
const dotenv=require('dotenv').config();
// Connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>  console.log("mongo db connected "))
    .catch(err => console.log(err));
//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

// cloudinary image db
const cloudinary= require('cloudinary').v2;

cloudinary.config({
    cloud_name:require('./config/keys').CLOUDINARY_CLOUD_NAME,
    api_key:require('./config/keys').CLOUNDINARY_API_KEY,
    api_secret:require('./config/keys').CLOUDINARY_API_SECRET
})

//Bodyparser
app.use(express.urlencoded({ extended: false }));

//express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

//use css and static
app.use(express.static(__dirname + '/public'));
//connect flash
app.use(flash());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server running on port 5000"));


const multer = require('multer');
const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const  upload = multer({storage : fileStorageEngine});
app.post('/single',upload.single("image"),(req,res,next)=>{
    req.user.update({ image1: req.file.filename }, (error, res) => {
        if (error) throw error;

    })
    res.redirect('/dashboard');
})

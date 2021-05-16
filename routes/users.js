const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// User model
const User = require('../models/User');


// Login page
router.get('/login', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/login.html');
});
// Register page
router.get('/register', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/register.html');
});

//The card page
router.get('/index3', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/index3.html');
});

//Package page
router.get('/index5', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/index5.html');
});

//About page
router.get('/index6', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/index6.html');
});

//home page
router.get('/homepageL', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/homepageL.html');
});


//The card page
router.get('/thecardL', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/thecardL.html');
});

//Package page
router.get('/thepackageL', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/thepackageL.html');
});

//About page
router.get('/aboutL', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/aboutL.html');
});


//Mohamed el malatawy's page
router.get('/index4', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/index4.html');
});

//Mohamed Yasser's page
router.get('/609f30ba7a6f704088692810', (req, res) => {
    res.sendFile('E:/Projects/Login System test/Trial 3/LoginRegister/views/609f30ba7a6f704088692810.html');
});


//register handle
router.post('/register', (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;
  let errors = [];

    if (!name || !email || !password || !passwordConfirm) {
    errors.push({ msg: 'Please enter all fields' });
  }

    if (password != passwordConfirm) {
    errors.push({ msg: 'Passwords do not match' });
  }

    if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

    if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      passwordConfirm
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
          errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
            passwordConfirm
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login handle
router.post('/login', (req, res,next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

//Log out handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// User model
const User = require('../models/User');


// Login page
router.get('/login', (req, res) => {
    res.render('/app/views/login.ejs');
});
// Register page
router.get('/register', (req, res) => {
    res.sendFile('/app/views/register.html');
});

//The card page
router.get('/index3', (req, res) => {
    res.sendFile('/app/views/index3.html');
});

//Package page
router.get('/index5', (req, res) => {
    res.sendFile('/app/views/index5.html');
});

//About page
router.get('/index6', (req, res) => {
    res.sendFile('/app/views/index6.html');
});

//home page
router.get('/homepageL', (req, res) => {
    res.sendFile('/app/views/homepageL.html');
});


//The card page
router.get('/thecardL', (req, res) => {
    res.sendFile('/app/views/thecardL.html');
});

//Package page
router.get('/thepackageL', (req, res) => {
    res.sendFile('/app/views/thepackageL.html');
});

//About page
router.get('/aboutL', (req, res) => {
    res.sendFile('/app/views/aboutL.html');
});


//Mohamed el malatawy's page
router.get('/MohamedElMalatawy', (req, res) => {
    User.findOne({ name: 'محمد عبد الفتاح الملطاوي' }).then(user => {
        console.log(user)
            res.render('/app/views/ClientProfile.ejs', {
            bio: user.bio,
            icons: user.icons,
            links: user.links,
            job: user.job,
            name: user.name,
            vcf:user.vcf,
            image1: user.image1,
            image2: user.image2
        })
    })
});


//Mohamed Yasser's page
router.get('/MohamedYasser', (req, res) => {
    User.findOne({ name: 'Mohamed Yasser Abdul-Fattah' }).then(user => {
        console.log(user.image1);
        res.render('/app/views/ClientProfile.ejs', {
            bio: user.bio,
            icons: user.icons,
            links: user.links,
            job: user.job,
            name: user.name,
            vcf:user.vcf,
            image1: user.image1,
            image2: user.image2
        })
    })
});

//Mostafa Mutaz's page
router.get('/MostafaMutaz', (req, res) => {
    User.findOne({ name: 'Mostafa Mutaz Bellah' }).then(user => {
        console.log(user)
            res.render('/app/views/ClientProfile.ejs', {
            bio: user.bio,
            icons: user.icons,
            links: user.links,
            job: user.job,
            name: user.name,
            vcf:user.vcf,
            image1: user.image1,
            image2: user.image2
        })
    })
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

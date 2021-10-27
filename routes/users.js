const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
// User model
const User = require('../models/User');
let dir = __dirname.replace('routes','');
const { ensureAuthenticated } = require('../config/auth');

let mail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS
    }
});

router.get('/index', (req, res) => {
  console.log(__dirname);
    res.sendFile(dir + '/views/index.html');
});

// Login page
router.get('/login', (req, res) => {
    res.render(dir +'/views/login.ejs');
});
// Register page
router.get('/register', (req, res) => {
    res.sendFile(dir +'/views/register.html');
});

//The card page
router.get('/index3', (req, res) => {
    res.sendFile(dir +'/views/index3.html');
});

//Package page
router.get('/index5', (req, res) => {
    res.sendFile(dir +'/views/index5.html');
});

//About page
router.get('/index6', (req, res) => {
    res.sendFile(dir +'/views/index6.html');
});

//home page
router.get('/homepageL',ensureAuthenticated, (req, res) => {
    res.sendFile(dir +'/views/homepageL.html');
});


//The card page
router.get('/thecardL',ensureAuthenticated, (req, res) => {
    res.sendFile(dir +'/views/thecardL.html');
});

//Package page
router.get('/thepackageL',ensureAuthenticated, (req, res) => {
    res.sendFile(dir +'/views/thepackageL.html');
});

//About page
router.get('/aboutL',ensureAuthenticated, (req, res) => {
    res.sendFile(dir +'/views/aboutL.html');
});

//Forget password page
router.get('/forget', (req, res) => {
    res.render(dir + '/views/forget.ejs');
});

//orders emails
router.post('/packEmails',(req,res)=>{
    let mailOptions = {
        from:'cardtap406@gmail.com',
        to:'momoteka6089@gmail.com',
        subject:'Order',
        text:`Sir name: ${req.body.name},
          email : ${req.body.email},
          type of order :${req.body.message},
          Phone number: ${req.body.number},
          Quantity : ${req.body.quantity}`
    }
    mail.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }
    });
    let mailOptions2 = {
        from:'cardtap406@gmail.com',
        to:req.body.email,
        subject:'Order Confirmation',
        text:`Sir name: ${req.body.name}, you have ordered ${req.body.message}.
        hang tight and we will reach back as soon as possible.
        Thank you from ordering from cardtap.`
    }
    mail.sendMail(mailOptions2,(error,info)=>{
        if(error){
            console.log(error);
        }
    });
    res.redirect('/users/index5');
})


//Help center
router.post('/helpEmails',(req,res)=>{
    let mailOptions = {
        from:'cardtap406@gmail.com',
        to:'momoteka6089@gmail.com',
        subject:'CardTap Help Center',
        text:`Sir name: ${req.body.name}, Phone number: ${req.body.number} , Message: ${req.body.message}`
    }
    mail.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }
    });
    res.redirect('/users/index6');
})

//Mohamed el malatawy's page
router.get('/MohamedElMalatawy', (req, res) => {
    User.findOne({ name: 'محمد عبد الفتاح الملطاوي' }).then(user => {
            res.render(dir +'/views/ClientProfile.ejs', {
           bio: user.bio,
           icons: user.icons,
           links: user.links,
           job: user.job,
           name: user.name,
           vcf:user.vcf,
           image1: user.image1,
           image2: user.image2,
           contact_link:user.contact_link,
           firstName:user.firstName,
           lastName:user.lastName,
           organization:user.organization,
           workPhone:user.workPhone,
           email2:user.email2,
           title:user.title,
           address1:user.address1,
           address2:user.address2
        })
    })
});


//Mohamed Yasser's page
router.get('/MohamedYasser', (req, res) => {
    User.findOne({ name: 'Mohamed Yasser' }).then(user => {
        res.render(dir +'/views/ClientProfilePre.ejs', {
          bio: user.bio,
             icons: user.icons,
             links: user.links,
             job: user.job,
             name: user.name,
             vcf:user.vcf,
             image1: user.image1,
             image2: user.image2,
             contact_link:user.contact_link,
             firstName:user.firstName,
             lastName:user.lastName,
             organization:user.organization,
             workPhone:user.workPhone,
             email2:user.email2,
             title:user.title,
             address1:user.address1,
             address2:user.address2
        })
    })
});

//Mostafa Mutaz's page
router.get('/MostafaMutaz', (req, res) => {
    User.findOne({ name: 'Mostafa Mutaz Bellah' }).then(user => {
            res.render(dir +'/views/ClientProfilePre.ejs', {
              bio: user.bio,
              icons: user.icons,
              links: user.links,
              job: user.job,
              name: user.name,
              vcf:user.vcf,
              image1: user.image1,
              image2: user.image2,
              contact_link:user.contact_link,
              firstName:user.firstName,
              lastName:user.lastName,
              organization:user.organization,
              workPhone:user.workPhone,
              email2:user.email2,
              title:user.title,
              address1:user.address1,
              address2:user.address2
        })
    })
});

//Hussain Ayman's page
router.get('/HussainAyman', (req, res) => {
    User.findOne({ name: 'Hussain Ayman' }).then(user => {
            res.render(dir +'/views/ClientProfile.ejs', {
              bio: user.bio,
              icons: user.icons,
              links: user.links,
              job: user.job,
              name: user.name,
              vcf:user.vcf,
              image1: user.image1,
              image2: user.image2,
              contact_link:user.contact_link,
              firstName:user.firstName,
              lastName:user.lastName,
              organization:user.organization,
              workPhone:user.workPhone,
              email2:user.email2,
              title:user.title,
              address1:user.address1,
              address2:user.address2
        })
    })
});

//Karim Mohi's page
router.get('/FredrickStewart', (req, res) => {
    User.findOne({ name: 'Fredrick Stewart' }).then(user => {
        res.render(dir + '/views/ClientProfile.ejs', {
            bio: user.bio,
            icons: user.icons,
            links: user.links,
            job: user.job,
            name: user.name,
            vcf:user.vcf,
            image1: user.image1,
            image2: user.image2,
            contact_link:user.contact_link,
            firstName:user.firstName,
            lastName:user.lastName,
            organization:user.organization,
            workPhone:user.workPhone,
            email2:user.email2,
            title:user.title,
            address1:user.address1,
            address2:user.address2
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

//Forget password handle
router.post('/forget',(req,res,next)=>{
    let errors=[];
   User.findOne({email:req.body.email}).then(user=>{
       if(!user){
           errors.push({ msg: `Email doesn't exist` })
           res.render(dir + '/views/forget.ejs',{errors});
       }
       else{
           const secret = process.env.JWT_SECRET + user.password;
           const payload = {
             email:user.email,
               id:user.id
           };
           const token = jwt.sign(payload,secret,{expiresIn: '15m'});
           const link = `http://www.card-tap.com/users/reset-password/${user.id}/${token}`;
           let mailOptions = {
               from:'cardtap406@gmail.com',
               to:`${user.email}`,
               subject:'Password reset link.',
               text:link
           }
           mail.sendMail(mailOptions,(error,info)=>{
               if(error){
                   console.log(error);
               }
           });
           req.flash('success_msg', 'Email has been sent.');
           res.redirect('/users/forget');
       }
   })
});
router.get('/reset-password/:id/:token',(req,res,next)=>{
   const {id, token} = req.params;
   let errors = [];
   User.findOne({_id:id}).then(user=>{
       if(!user){
           errors.push({msg:'Expired or bad request.'})
           res.render(dir+ 'views/forget.ejs',{errors});
       }
       else{
           const secret = process.env.JWT_SECRET + user.password;
           try {
               const payload = jwt.verify(token,secret);
               res.render(dir+ 'views/reset-password.ejs');
           }catch(error){
               res.send(error.message);
           }
       }
   })
});
router.post('/reset-password/:id/:token',(req,res,next)=>{
    const {id, token} = req.params;
    const {password , passwordConfirm} = req.body;
    let errors=[];
    User.findOne({_id:id}).then(user=>{
        if(!user){
            errors.push({msg:'Expired or bad request.'})
            res.render(dir+ 'views/forget.ejs',{errors});
        }
        else{
            const secret = process.env.JWT_SECRET + user.password;
            try {
                const payload = jwt.verify(token,secret);
                if(password!==passwordConfirm){
                    errors.push({msg:'Passwords doesn\'t match.'})
                    res.render(dir+'views/reset-password.ejs',{errors});
                }
                else {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) throw err;
                            user.update({password: hash}, (error, res) => {
                                if (error) throw error;
                            })
                        })
                    });
                    req.flash(
                        'success_msg',
                        'Password has been changed successfully.'
                    );
                    res.redirect('/users/login');
                }
            }catch(error){
                res.send(error.message);
            }
        }
    })
})

module.exports = router;

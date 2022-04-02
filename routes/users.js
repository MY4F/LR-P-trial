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

router.get('/Home', (req, res) => {
  console.log(__dirname);
    res.sendFile(dir + '/views/Home.html');
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
router.get('/Packages', (req, res) => {
    res.sendFile(dir +'/views/Packages.html');
});

//About page
router.get('/About', (req, res) => {
    res.sendFile(dir +'/views/About.html');
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
        from:'cardtapcommunity@gmail.com',
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
        from:'cardtapcommunity@gmail.com',
        to:req.body.email,
        subject:'Order Confirmation',
        text:`Hello, ${req.body.name}, you have ordered ${req.body.message}. hang tight and we will reach back as soon as possible.
         Thank you for ordering from cardtap.`,
        html:'<!doctype html>\n' +
            '<html>\n' +
            '  <head>\n' +
            '    <meta name="viewport" content="width=device-width" />\n' +
            '    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n' +
            '    <title>Order confirmation</title>\n' +
            '    <style>\n' +
            '      /* -------------------------------------\n' +
            '          GLOBAL RESETS\n' +
            '      ------------------------------------- */\n' +
            '      \n' +
            '      /*All the styling goes here*/\n' +
            '      \n' +
            '      img {\n' +
            '        border: none;\n' +
            '        -ms-interpolation-mode: bicubic;\n' +
            '        max-width: 100%; \n' +
            '      }\n' +
            '\n' +
            '      body {\n' +
            '        background-color: #f6f6f6;\n' +
            '        font-family: sans-serif;\n' +
            '        -webkit-font-smoothing: antialiased;\n' +
            '        font-size: 14px;\n' +
            '        line-height: 1.4;\n' +
            '        margin: 0;\n' +
            '        padding: 0;\n' +
            '        -ms-text-size-adjust: 100%;\n' +
            '        -webkit-text-size-adjust: 100%; \n' +
            '      }\n' +
            '\n' +
            '      table {\n' +
            '        border-collapse: separate;\n' +
            '        mso-table-lspace: 0pt;\n' +
            '        mso-table-rspace: 0pt;\n' +
            '        width: 100%; }\n' +
            '        table td {\n' +
            '          font-family: sans-serif;\n' +
            '          font-size: 14px;\n' +
            '          vertical-align: top; \n' +
            '      }\n' +
            '\n' +
            '      /* -------------------------------------\n' +
            '          BODY & CONTAINER\n' +
            '      ------------------------------------- */\n' +
            '\n' +
            '      .body {\n' +
            '        background-color: #f6f6f6;\n' +
            '        width: 100%; \n' +
            '      }\n' +
            '\n' +
            '      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */\n' +
            '      .container {\n' +
            '        display: block;\n' +
            '        margin: 0 auto !important;\n' +
            '        /* makes it centered */\n' +
            '        max-width: 580px;\n' +
            '        padding: 10px;\n' +
            '        width: 580px; \n' +
            '      }\n' +
            '\n' +
            '      /* This should also be a block element, so that it will fill 100% of the .container */\n' +
            '      .content {\n' +
            '        box-sizing: border-box;\n' +
            '        display: block;\n' +
            '        margin: 0 auto;\n' +
            '        max-width: 580px;\n' +
            '        padding: 10px; \n' +
            '      }\n' +
            '\n' +
            '      /* -------------------------------------\n' +
            '          HEADER, FOOTER, MAIN\n' +
            '      ------------------------------------- */\n' +
            '      .main {\n' +
            '        background: #ffffff;\n' +
            '        border-radius: 3px;\n' +
            '        width: 100%; \n' +
            '      }\n' +
            '\n' +
            '      .wrapper {\n' +
            '        box-sizing: border-box;\n' +
            '        padding: 20px; \n' +
            '      }\n' +
            '\n' +
            '      .content-block {\n' +
            '        padding-bottom: 10px;\n' +
            '        padding-top: 10px;\n' +
            '      }\n' +
            '\n' +
            '      .footer {\n' +
            '        clear: both;\n' +
            '        margin-top: 10px;\n' +
            '        text-align: center;\n' +
            '        width: 100%; \n' +
            '      }\n' +
            '        .footer td,\n' +
            '        .footer p,\n' +
            '        .footer span,\n' +
            '        .footer a {\n' +
            '          color: #999999;\n' +
            '          font-size: 12px;\n' +
            '          text-align: center; \n' +
            '      }\n' +
            '\n' +
            '      /* -------------------------------------\n' +
            '          TYPOGRAPHY\n' +
            '      ------------------------------------- */\n' +
            '      h1,\n' +
            '      h2,\n' +
            '      h3,\n' +
            '      h4 {\n' +
            '        color: #000000;\n' +
            '        font-family: sans-serif;\n' +
            '        font-weight: 400;\n' +
            '        line-height: 1.4;\n' +
            '        margin: 0;\n' +
            '        margin-bottom: 30px; \n' +
            '      }\n' +
            '\n' +
            '      h1 {\n' +
            '        font-size: 35px;\n' +
            '        font-weight: 300;\n' +
            '        text-align: center;\n' +
            '        text-transform: capitalize; \n' +
            '      }\n' +
            '\n' +
            '      p,\n' +
            '      ul,\n' +
            '      ol {\n' +
            '        font-family: sans-serif;\n' +
            '        font-size: 14px;\n' +
            '        font-weight: normal;\n' +
            '        margin: 0;\n' +
            '        margin-bottom: 15px; \n' +
            '      }\n' +
            '        p li,\n' +
            '        ul li,\n' +
            '        ol li {\n' +
            '          list-style-position: inside;\n' +
            '          margin-left: 5px; \n' +
            '      }\n' +
            '\n' +
            '      a {\n' +
            '        color: #3498db;\n' +
            '        text-decoration: underline; \n' +
            '      }\n' +
            '\n' +
            '      /* -------------------------------------\n' +
            '          BUTTONS\n' +
            '      ------------------------------------- */\n' +
            '      .btn {\n' +
            '        box-sizing: border-box;\n' +
            '        width: 100%; }\n' +
            '        .btn > tbody > tr > td {\n' +
            '          padding-bottom: 15px; }\n' +
            '        .btn table {\n' +
            '          width: auto; \n' +
            '      }\n' +
            '        .btn table td {\n' +
            '          background-color: #ffffff;\n' +
            '          border-radius: 5px;\n' +
            '          text-align: center; \n' +
            '      }\n' +
            '        .btn a {\n' +
            '          background-color: #ffffff;\n' +
            '          border: solid 1px #3498db;\n' +
            '          border-radius: 5px;\n' +
            '          box-sizing: border-box;\n' +
            '          color: #3498db;\n' +
            '          cursor: pointer;\n' +
            '          display: inline-block;\n' +
            '          font-size: 14px;\n' +
            '          font-weight: bold;\n' +
            '          margin: 0;\n' +
            '          padding: 12px 25px;\n' +
            '          text-decoration: none;\n' +
            '          text-transform: capitalize; \n' +
            '      }\n' +
            '\n' +
            '      .btn-primary table td {\n' +
            '        background-color: #3498db; \n' +
            '      }\n' +
            '\n' +
            '      .btn-primary a {\n' +
            '        background-color: #3498db;\n' +
            '        border-color: #3498db;\n' +
            '        color: #ffffff; \n' +
            '      }\n' +
            '\n' +
            '      /* -------------------------------------\n' +
            '          OTHER STYLES THAT MIGHT BE USEFUL\n' +
            '      ------------------------------------- */\n' +
            '      .last {\n' +
            '        margin-bottom: 0; \n' +
            '      }\n' +
            '\n' +
            '      .first {\n' +
            '        margin-top: 0; \n' +
            '      }\n' +
            '\n' +
            '      .align-center {\n' +
            '        text-align: center; \n' +
            '      }\n' +
            '\n' +
            '      .align-right {\n' +
            '        text-align: right; \n' +
            '      }\n' +
            '\n' +
            '      .align-left {\n' +
            '        text-align: left; \n' +
            '      }\n' +
            '\n' +
            '      .clear {\n' +
            '        clear: both; \n' +
            '      }\n' +
            '\n' +
            '      .mt0 {\n' +
            '        margin-top: 0; \n' +
            '      }\n' +
            '\n' +
            '      .mb0 {\n' +
            '        margin-bottom: 0; \n' +
            '      }\n' +
            '\n' +
            '      .preheader {\n' +
            '        color: transparent;\n' +
            '        display: none;\n' +
            '        height: 0;\n' +
            '        max-height: 0;\n' +
            '        max-width: 0;\n' +
            '        opacity: 0;\n' +
            '        overflow: hidden;\n' +
            '        mso-hide: all;\n' +
            '        visibility: hidden;\n' +
            '        width: 0; \n' +
            '      }\n' +
            '\n' +
            '      .powered-by a {\n' +
            '        text-decoration: none; \n' +
            '      }\n' +
            '\n' +
            '      hr {\n' +
            '        border: 0;\n' +
            '        border-bottom: 1px solid #f6f6f6;\n' +
            '        margin: 20px 0; \n' +
            '      }\n' +
            '\n' +
            '      /* -------------------------------------\n' +
            '          RESPONSIVE AND MOBILE FRIENDLY STYLES\n' +
            '      ------------------------------------- */\n' +
            '      @media only screen and (max-width: 620px) {\n' +
            '        table[class=body] h1 {\n' +
            '          font-size: 28px !important;\n' +
            '          margin-bottom: 10px !important; \n' +
            '        }\n' +
            '        table[class=body] p,\n' +
            '        table[class=body] ul,\n' +
            '        table[class=body] ol,\n' +
            '        table[class=body] td,\n' +
            '        table[class=body] span,\n' +
            '        table[class=body] a {\n' +
            '          font-size: 16px !important; \n' +
            '        }\n' +
            '        table[class=body] .wrapper,\n' +
            '        table[class=body] .article {\n' +
            '          padding: 10px !important; \n' +
            '        }\n' +
            '        table[class=body] .content {\n' +
            '          padding: 0 !important; \n' +
            '        }\n' +
            '        table[class=body] .container {\n' +
            '          padding: 0 !important;\n' +
            '          width: 100% !important; \n' +
            '        }\n' +
            '        table[class=body] .main {\n' +
            '          border-left-width: 0 !important;\n' +
            '          border-radius: 0 !important;\n' +
            '          border-right-width: 0 !important; \n' +
            '        }\n' +
            '        table[class=body] .btn table {\n' +
            '          width: 100% !important; \n' +
            '        }\n' +
            '        table[class=body] .btn a {\n' +
            '          width: 100% !important; \n' +
            '        }\n' +
            '        table[class=body] .img-responsive {\n' +
            '          height: auto !important;\n' +
            '          max-width: 100% !important;\n' +
            '          width: auto !important; \n' +
            '        }\n' +
            '      }\n' +
            '\n' +
            '      /* -------------------------------------\n' +
            '          PRESERVE THESE STYLES IN THE HEAD\n' +
            '      ------------------------------------- */\n' +
            '      @media all {\n' +
            '        .ExternalClass {\n' +
            '          width: 100%; \n' +
            '        }\n' +
            '        .ExternalClass,\n' +
            '        .ExternalClass p,\n' +
            '        .ExternalClass span,\n' +
            '        .ExternalClass font,\n' +
            '        .ExternalClass td,\n' +
            '        .ExternalClass div {\n' +
            '          line-height: 100%; \n' +
            '        }\n' +
            '        .apple-link a {\n' +
            '          color: inherit !important;\n' +
            '          font-family: inherit !important;\n' +
            '          font-size: inherit !important;\n' +
            '          font-weight: inherit !important;\n' +
            '          line-height: inherit !important;\n' +
            '          text-decoration: none !important; \n' +
            '        }\n' +
            '        #MessageViewBody a {\n' +
            '          color: inherit;\n' +
            '          text-decoration: none;\n' +
            '          font-size: inherit;\n' +
            '          font-family: inherit;\n' +
            '          font-weight: inherit;\n' +
            '          line-height: inherit;\n' +
            '        }\n' +
            '        .btn-primary table td:hover {\n' +
            '          background-color: #34495e !important; \n' +
            '        }\n' +
            '        .btn-primary a:hover {\n' +
            '          background-color: #34495e !important;\n' +
            '          border-color: #34495e !important; \n' +
            '        } \n' +
            '      }\n' +
            '\n' +
            '    </style>\n' +
            '  </head>\n' +
            '  <body class="">\n' +
            '    <span class="preheader">cardtap.</span>\n' +
            '    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">\n' +
            '      <tr>\n' +
            '        <td>&nbsp;</td>\n' +
            '        <td class="container">\n' +
            '          <div class="content">\n' +
            '\n' +
            '            <!-- START CENTERED WHITE CONTAINER -->\n' +
            '            <table role="presentation" class="main">\n' +
            '\n' +
            '              <!-- START MAIN CONTENT AREA -->\n' +
            '              <tr>\n' +
            '                <td class="wrapper">\n' +
            '                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n' +
            '                    <tr>\n' +
            '                      <td>\n' +
            `                        <p>Hello, ${req.body.name} </p>\n` +
            `                        <p>You have ordered ${req.body.message}. Hang tight and we will reach back as soon as possible.Thank you for ordering from cardtap</p>\n` +
            '                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">\n' +
            '                          <tbody>\n' +
            '                            <tr>\n' +
            '                              <td align="left">\n' +
            '                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n' +
            '                                  <tbody>\n' +
            '                                  </tbody>\n' +
            '                                </table>\n' +
            '                              </td>\n' +
            '                            </tr>\n' +
            '                          </tbody>\n' +
            '                        </table>\n' +
            '                      </td>\n' +
            '                    </tr>\n' +
            '                  </table>\n' +
            '                </td>\n' +
            '              </tr>\n' +
            '\n' +
            '            <!-- END MAIN CONTENT AREA -->\n' +
            '            </table>\n' +
            '            <!-- END CENTERED WHITE CONTAINER -->\n' +
            '\n' +
            '            <!-- START FOOTER -->\n' +
            '            <div class="footer">\n' +
            '              <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n' +
            '                <tr>\n' +
            '                  <td class="content-block">\n' +
            '                    <span class="apple-link">© 2021 cardtap</span>\n' +
            '                    <br> <a href="https://www.card-tap.com/users/Home">cardtap</a>.\n' +
            '                  </td>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            '                </tr>\n' +
            '              </table>\n' +
            '            </div>\n' +
            '            <!-- END FOOTER -->\n' +
            '\n' +
            '          </div>\n' +
            '        </td>\n' +
            '        <td>&nbsp;</td>\n' +
            '      </tr>\n' +
            '    </table>\n' +
            '  </body>\n' +
            '</html>'
    }
    mail.sendMail(mailOptions2,(error,info)=>{
        if(error){
            console.log(error);
        }
    });
    res.redirect('/users/Packages');
})

//Help center
router.post('/helpEmails',(req,res)=>{
    let mailOptions = {
        from:'cardtapcommunity@gmail.com',
        to:'momoteka6089@gmail.com',
        subject:'cardtap Help Center',
        text:`Sir name: ${req.body.name}, Phone number: ${req.body.number} , Message: ${req.body.message}`
    }
    mail.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }
    });
    res.redirect('/users/About');
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
           address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
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
             address2:user.address2,
             email3:user.email3,
             homePhone:user.homePhone
        })
    })
});

//Mohamed Yasser' Standard page
router.get('/MohamedYasserStandard', (req, res) => {
    User.findOne({ name: 'Mohamed Yasser' }).then(user => {
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
             address2:user.address2,
             email3:user.email3,
             homePhone:user.homePhone
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
              address2:user.address2,
              email3:user.email3,
              homePhone:user.homePhone
        })
    })
});

//Mostafa Mutaz's Standard page
router.get('/MostafaMutazStandard', (req, res) => {
    User.findOne({ name: 'Mostafa Mutaz Bellah' }).then(user => {
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
              address2:user.address2,
              email3:user.email3,
              homePhone:user.homePhone
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
              address2:user.address2,
              email3:user.email3,
              homePhone:user.homePhone
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mahmoud Aladin's page
router.get('/MahmoudAladin', (req, res) => {
    User.findOne({ name: 'Mahmoud Aladin' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Momen Maher's page
router.get('/MomenMaher', (req, res) => {
    User.findOne({ name: 'Moamen Maher' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Fady Hany's page
router.get('/FadyHany', (req, res) => {
    User.findOne({ name: 'Fady Hany' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mostafa Sayed's page
router.get('/MostafaSayed', (req, res) => {
    User.findOne({ name: 'Mostafa Sayed' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Belal Yasser's page
router.get('/BelalYasser', (req, res) => {
    User.findOne({ name: 'Belal Yasser' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Yasmine Afify's page
router.get('/YasmineAfify', (req, res) => {
    User.findOne({ name: 'Yasmine Afify' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Youssef Sabbour's page
router.get('/YoussefSabbour', (req, res) => {
    User.findOne({ name: 'Youssef Sabbour' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Farida Fahmy's page
router.get('/FaridaFahmy', (req, res) => {
    User.findOne({ name: 'Farida Fahmy' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//laila Gomaa's page
router.get('/LailaGomaa', (req, res) => {
    User.findOne({ name: 'Laila Gomaa' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Said AbdulAziem's page
router.get('/SaidAbdulAziem', (req, res) => {
    User.findOne({ name: 'Said AbdulAziem' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Seif Tarek's page
router.get('/SeifTarek', (req, res) => {
    User.findOne({ name: 'Seif Tarek' }).then(user => {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Rabie Al-Alfy's page
router.get('/RabieAlAlfy', (req, res) => {
    User.findOne({ name: 'Rabie Al-Alfy' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Omar AbdulRahman's page
router.get('/OmarAbdulRahman', (req, res) => {
    User.findOne({ name: 'Omar AbdulRahman' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mohamed ElShaarawy's page
router.get('/MohamedElShaarawy', (req, res) => {
    User.findOne({ name: 'Mohamed ElShaarawy' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mohamed Yasin Fata's page
router.get('/MohamedYasinFata', (req, res) => {
    User.findOne({ name: 'Mohamed Yasin Fata' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});


//Mohamed El Banna Fata's page
router.get('/MohamedElBanna', (req, res) => {
    User.findOne({ name: 'Mohamed El Banna' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});


//Ali Agina's page
router.get('/AliAgina', (req, res) => {
    User.findOne({ name: 'Ali Agina' }).then(user => {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});



//Youmna Galal's page
router.get('/YoumnaGalal', (req, res) => {
    User.findOne({ name: 'Youmna Galal' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Karim Gad's page
router.get('/KarimGad', (req, res) => {
    User.findOne({ name: 'Karim Gad' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mohamed Tawfik's page
router.get('/MohamedTawfik', (req, res) => {
    User.findOne({ name: 'Mohamed Tawfik' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Sherif Refaat Agina's page
router.get('/SherifRefaat', (req, res) => {
    User.findOne({ name: 'Sherif Refaat' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Seif Shaarawy's page
router.get('/SeifShaarawy', (req, res) => {
    User.findOne({ name: 'Seif Shaarawy' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Amr Ezz's page
router.get('/AmrEzz', (req, res) => {
    User.findOne({ name: 'Amr Ezz' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Karim Fakhoury's page
router.get('/KarimFakhoury', (req, res) => {
    User.findOne({ name: 'Karim Fakhoury' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});
//Youssef Lawendy's page
router.get('/YoussefLawendy', (req, res) => {
    User.findOne({ name: 'Youssef Lawendy' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Ali Mutaz's page
router.get('/AliMutaz', (req, res) => {
    User.findOne({ name: 'Ali Mutaz' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mohamed EL Gammal's page
router.get('/MohamedElGammal', (req, res) => {
    User.findOne({ name: 'Mohamed El Gammal' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mohamed Hesham's page
router.get('/MohamedHesham', (req, res) => {
    User.findOne({ name: 'Mohamed Hesham' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Fredrick Stewart Pre's page
router.get('/FredrickStewartPre', (req, res) => {
    User.findOne({ name: 'Fredrick Stewart Pre' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Amr Sami's page
router.get('/AmrSami', (req, res) => {
    User.findOne({ name: 'Amr Sami' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Hanien Gaballah's page
router.get('/HanienGaballah', (req, res) => {
    User.findOne({ name: 'Hanien Gaballah' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Gamal Gaballah's page
router.get('/GamalGaballah', (req, res) => {
    User.findOne({ name: 'Gamal Gaballah' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Toka Hesham's page
router.get('/TokaHesham', (req, res) => {
    User.findOne({ name: 'Toka Hesham' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Abdelrahman Zahran's page
router.get('/AbdelrahmanZahran', (req, res) => {
    User.findOne({ name: 'Abdelrahman Zahran' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Salma's page
router.get('/Salma', (req, res) => {
    User.findOne({ name: 'Salma' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mark's page
router.get('/StandardUser', (req, res) => {
    User.findOne({ name: 'Mark Henry' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Mohamed Tantawy's page
router.get('/MohamedTantawy', (req, res) => {
    User.findOne({ name: 'Mohamed Tantawy' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Karla's page
router.get('/KarlaMeleka', (req, res) => {
    User.findOne({ name: 'Karla Meleka' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Bassam's page
router.get('/BassamMoataz', (req, res) => {
    User.findOne({ name: 'Bassam Moataz' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});

//Ahmed Bahaa's page
router.get('/AhmedAskar', (req, res) => {
    User.findOne({ name: 'Ahmed Bahaa' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});


//Abdurahman Massoud's page
router.get('/Coltene', (req, res) => {
    User.findOne({ name: 'Abdurahman Massoud' }).then(user => {
        res.render(dir + '/views/ClientProfilePre.ejs', {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});


//Abdurahman Massoud's page
router.get('/MostafaGamal', (req, res) => {
    User.findOne({ name: 'Mostafa Gamal' }).then(user => {
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
            address2:user.address2,
            email3:user.email3,
            homePhone:user.homePhone
        })
    })
});


router.get('/Agenda',(req,res)=>{
    res.sendFile(dir + '/views/tedx.html');
})


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

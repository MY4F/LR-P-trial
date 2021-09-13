const express = require('express');
const router = express.Router();
const app = express();
const { ensureAuthenticated } = require('../config/auth');
const User = require('../models/User');
const vCardJS = require('vcards-js');
const save = require('save-file');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const fs = require('fs');
let newA = ' ';
let newA2 = ' ';
let duplicate2 = ' ';
let duplicte = '  ';
let errors=[];
let errors2=[];
//welcome page
router.get('/', (req, res) => {
    res.sendFile('/app/views/index.html');
});
// dashboards
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render(`ClientProfileEdit.ejs`, {
        bio: req.user.bio,
        icons: req.user.icons,
        links: req.user.links,
        job: req.user.job,
        name: req.user.name,
        vcf: req.user.vcf,
        image1: req.user.image1,
        image2: req.user.image2,
        contact_link:req.user.contact_link,
         firstName:req.user.firstName,
         lastName:req.user.lastName,
         organization:req.user.organization,
         workPhone:req.user.workPhone,
         email2:req.user.email2,
         title:req.user.title,
         errors,
         errors2

    });

});

router.post('/contactUpdate',async (req,res)=>{
   try {
       const vCard = vCardJS();
       vCard.firstName = req.body.firstName;
       vCard.lastName = req.body.lastName;
       vCard.organization = req.body.organization;
       vCard.workPhone = req.body.workPhone;
       vCard.email = req.body.email;
       vCard.title = req.body.title;
       res.set('Content-Type', 'text/vcard; name="enesser.vcf"');
       vCard.saveToFile('./con.vcf');
       const result = await cloudinary.uploader.upload('./con.vcf',
           { resource_type: "raw" },
           function(error, result) {console.log(result, error); });
       fs.unlinkSync('./con.vcf');
       await cloudinary.uploader.destroy(req.user.public_id_con, { resource_type: "raw" },
           function(error, result) {console.log(result, error); });
       req.user.update({
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           organization: req.body.organization,
           workPhone: req.body.workPhone,
           email2: req.body.email,
           title: req.body.title,
           public_id_con:result.public_id,
           contact_link:result.url
       }, (error, res) => {
           if (error) throw error;
       })
       res.redirect('/dashboard');
   }
   catch(err){ throw err;}
});


router.post('/bioUpdate', (req, res) => {
    let bioUpdate = req.body.bio;
    req.user.update({ bio: bioUpdate }, (error, res) => {
        if (error) throw error;
    })
    res.redirect('/dashboard');
});


router.post('/iconsUpdate', (req, res) => {
    errors=[];
    newA=req.user.icons;
    scType = req.body.scType;
    console.log(scType);
    if(req.body.link==="" && scType.length<20 ){
        errors.push({msg:'Please enter an appropriate link.'});
        res.redirect('/dashboard');
    }
    else if (req.body.link==="") {
        newA = newA.replace(scType, ' ');
        req.user.update({ icons: newA }, (error, res) => {
            if (error) throw error;
        })
        res.redirect('/dashboard');
    }
    else  {
        let duplicate = '';
        if (scType === 'linkedin') {
            duplicate = `<a href="${req.body.link}" target="_blank"><i class="fab fa-${scType} fa-2x" aria-hidden="true"></i></a>`;
        }
        else{
            duplicate = `<a href="${req.body.link}" target="_blank"><i class="fab fa-${scType}-square fa-2x" aria-hidden="true"></i></a>`;
        }
        if (scType === 'linkedin' && !newA.includes(duplicate)) {
            newA += `<a href="${req.body.link}" target="_blank"><i class="fab fa-${scType} fa-2x" aria-hidden="true"></i></a>  `;
        }
        else if (!newA.includes(duplicate)) {
            if(scType==='whatsapp')
                newA += `<a href="//wa.me/+2${req.body.link}/?text=Hello My Greetings" target="_blank"><i class="fab fa-${scType}-square fa-2x" aria-hidden="true"></i></a>`;
            else
                newA += `<a href="${req.body.link}" target="_blank"><i class="fab fa-${scType}-square fa-2x" aria-hidden="true"></i></a>  `;

        }
        else{
            errors.push({msg:'You have entered duplicated link, please enter an appropriate link.'});
        }
        req.user.update({ icons: newA }, (error, res) => {
            if (error) throw error;
        })
        res.redirect('/dashboard');

    }
});


router.post('/linksUpdate', (req, res) => {
    errors2 = [];
    scType = req.body.link3;
    newA2 = req.user.links
    if(req.body.link2 ==="" && scType.length<20){
        errors2.push({msg:'Please enter an appropriate link.'});
        res.redirect('/dashboard');
    }
    else if (req.body.link2 ==="") {
        newA2 = newA2.replace(scType, ' ');
        req.user.update({ links: newA2 }, (error, res) => {
            if (error) throw error;

        })
        res.redirect('/dashboard');
    }
    else {
        let duplicate2 = `<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="${req.body.link2}">${req.body.link2}</a></div>`;
        if(scType === 'envelope')
            duplicate2=`<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="mailto:${req.body.link2}">${req.body.link2}</a></div>  `;
        else if( scType === 'phone-alt')
            duplicate2 = `<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="tel:+2${req.body.link2}">${req.body.linkName}</a></div>  `;
        else if( scType==='map-marker-alt' || scType==='globe')
            duplicate2=`<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="${req.body.link2}">${req.body.linkName}</a></div>  `;
        if(scType ==='envelope' && !newA2.includes(duplicate2)){
            newA2 += `<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="mailto:${req.body.link2}">${req.body.link2}</a></div>  `;
        }
        else if(scType === 'phone-alt' && !newA2.includes(duplicate2)){
            newA2 += `<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="tel:+2${req.body.link2}">${req.body.linkName}</a></div>  `;
        }
        else if(scType === 'map-marker-alt' && !newA2.includes(duplicate2) || scType === 'globe' && !newA2.includes(duplicate2))
            newA2+=`<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="${req.body.link2}">${req.body.linkName}</a></div>  `;
        else if (!newA2.includes(duplicate2))
            newA2 += `<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="${req.body.link2}">${req.body.link2}</a></div>  `;

        req.user.update({ links: newA2 }, (error, res) => {
            if (error) throw error;

        })
        res.redirect('/dashboard');
    }
});

// Image upload

router.post('/single',upload.single("image"),async (req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        await cloudinary.uploader.destroy(req.user.public_id);
        req.user.update({ image1:result.secure_url,image2: result.secure_url,public_id:result.public_id }, (error, res) => {
            if (error) throw error;
        })
        res.redirect('/dashboard');
    }
    catch(err){ throw err;}
})





module.exports = router;

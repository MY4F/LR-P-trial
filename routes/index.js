const express = require('express');
const router = express.Router();
const app = express();
const { ensureAuthenticated } = require('../config/auth');
const User = require('../models/User');
let newA = ' ';
let newA2 = ' ';
let duplicate2 = ' ';
let duplicte = '  ';
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
        image2: req.user.image2

    });

});
router.post('/bioUpdate', (req, res) => {
    let bioUpdate = req.body.bio;
    console.log(req.user);
    req.user.update({ bio: bioUpdate }, (error, res) => {
        if (error) throw error;
    })
    let n = req.user.id;
    res.render(`ClientProfileEdit.ejs`, {
        icons: req.user.icons,
        bio: bioUpdate,
        links: req.user.links,
        job: req.user.job,
        name: req.user.name,
        vcf: req.user.vcf,
        image1: req.user.image1,
        image2: req.user.image2
    });
});

router.post('/iconsUpdate', (req, res) => {
  newA=req.user.icons;
   let errors = [];
   scType = req.body.scType;
   if (req.body.link==="") {
       newA = newA.replace(scType, ' ');
       req.user.update({ icons: newA }, (error, res) => {
           if (error) throw error;

       })
       res.redirect('/dashboard');
   }
   else  {
       let duplicate = '';
       if (scType === 'linkedin') {
           duplicate = `<a href="${req.body.link}" target="_blank"><i class="fab fa-${scType}" aria-hidden="true"></i></a>`;
       }
       else {
           duplicate = `<a href="${req.body.link}" target="_blank"><i class="fab fa-${scType}-square" aria-hidden="true"></i></a>`;
       }
       if (scType === 'linkedin' && !newA.includes(duplicate))
           newA += `<a href="${req.body.link}" target="_blank"><i class="fab fa-${scType}" aria-hidden="true"></i></a>  `;
       else if (!newA.includes(duplicate))
           newA += `<a href="${req.body.link}" target="_blank"><i class="fab fa-${scType}-square" aria-hidden="true"></i></a>  `;
       req.user.update({ icons: newA }, (error, res) => {
           if (error) throw error;

       })
       res.redirect('/dashboard');
   }
});




router.post('/linksUpdate', (req, res) => {
  let errors2 = [];
    scType = req.body.link3;
    newA2 = req.user.links
    if (req.body.link2 ==="") {
        console.log(scType);
        newA2 = newA2.replace(scType, ' ');
        console.log(newA2);
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
const multer = require('multer');
const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'/app/public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})
const  upload = multer({storage : fileStorageEngine});
router.post('/single',upload.single("image"),(req,res,next)=>{
    req.user.update({ image1: req.file.filename }, (error, res) => {
        if (error) throw error;

    })
    res.redirect('/dashboard');
})






module.exports = router;

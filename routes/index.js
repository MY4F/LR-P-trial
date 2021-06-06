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
    let n = req.user.id;
    res.render(`${n}.ejs`, {
        bio: req.user.bio,
        icons: req.user.icons,
        links: req.user.links
    });

});
router.post('/bioUpdate', (req, res) => {
    const bioUpdate = req.body.bio;
    User.update({ bio: bioUpdate }, (error, res) => {
        if (error) throw error;

    })
    let n = req.user.id;
    res.render(`${n}.ejs`, {
        icons: req.user.icons,
        bio: bioUpdate,
        links: req.user.links
    });
});
router.post('/iconsUpdate', (req, res) => {
    scType = req.body.scType;
    newA=req.user.icons
    if (req.body.link < 13) {
        newA = newA.replace(scType, ' ');
    }
    else {
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
    }
    User.update({ icons: newA }, (error, res) => {
        if (error) throw error;

    })
    let n = req.user.id;
    res.render(`${n}.ejs`, {
        icons: newA,
        bio: req.user.bio,
        links: req.user.links
    });
});



router.post('/linksUpdate', (req, res) => {
    scType = req.body.link3;
    newA2 = req.user.links
    console.log(scType);
    if (req.body.link2 < 13) {
        newA2 = newA2.replace(scType, ' ');
    }
    else {
        let duplicate2 = `<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="${req.body.link2}">${req.body.link2}</a></div>`;
        if (!newA2.includes(duplicate2))
            newA2 += `<div class="oth"> <i class="fas fa-${req.body.link3}" aria-hidden="true"></i> <a href="${req.body.link2}">${req.body.link2}</a></div>  `;
    }
    User.update({ links: newA2 }, (error, res) => {
        if (error) throw error;

    })
    let n = req.user.id;
    res.render(`${n}.ejs`, {
        icons: req.user.icons,
        bio: req.user.bio,
        links : newA2
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const app = express();
const { ensureAuthenticated } = require('../config/auth');
//welcome page
router.get('/', (req, res) => {
    res.sendFile('/LR-P-trial/views/index.html');
});
// dashboards
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    let n = req.user.id;
    res.sendFile(`E:/Projects/Login System test/Trial 3/LoginRegister/views/${n}.html`);

});
module.exports = router;

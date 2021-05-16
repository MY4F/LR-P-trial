const express = require('express');
const router = express.Router();
const app = express();
const { ensureAuthenticated } = require('../config/auth');
//welcome page
router.get('/', (req, res) => {
    res.sendFile('/app/views/index.html');
});
// dashboards
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    let n = req.user.id;
    res.sendFile(`/app/views/views/${n}.html`);

});
module.exports = router;

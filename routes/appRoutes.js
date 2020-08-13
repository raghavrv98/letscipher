var express = require('express');
var router = express.Router();
var homeCtrl=require('../controllers/homeCtrl')

/* GET home page. */
router.get('/', homeCtrl.showHome);
router.get('/services', homeCtrl.showServices);
router.get('/team', homeCtrl.showTeam);
router.post('/', homeCtrl.enquiryMail);

module.exports = router;

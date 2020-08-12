var express = require('express');
var router = express.Router();
var homeCtrl=require('../controllers/homeCtrl')

/* GET home page. */
router.get('/', homeCtrl.showHome);
router.get('/services', homeCtrl.showServices);
router.get('/developer', homeCtrl.showDeveloper);
router.post('/', homeCtrl.enquiryMail);

module.exports = router;

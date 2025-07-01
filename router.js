const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const mailController = require('./controllers/mailController');

router.get('/', homeController.home);
router.post('/enviarMail', mailController.enviarMail);

module.exports = router;

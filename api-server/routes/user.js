var express = require('express');
var router = express.Router();
let users = require('../controllers/user');
let multer = require('../db/config/storage')

router.post('/login', users.login);

router.get('/get', users.get_user)

router.post('/add', multer.upload.single('avatar'), users.add_user);

module.exports = router;

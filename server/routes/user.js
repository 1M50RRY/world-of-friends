var express = require('express');
var router = express.Router();
let users = require('../controllers/user');
let multer = require('../db/config/storage')
const fileType = require('file-type');

router.post('/login', users.login);
router.get('/get', users.getUser)
router.post('/add', multer.upload.single('avatar'), users.addUser);

module.exports = router;

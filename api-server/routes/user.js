var express = require('express');
var router = express.Router();
let users = require('../controllers/user');

router.get('/', users.get_users);

router.get('/id/:country_id', users.get_user)

router.post('/add', users.add_user);

module.exports = router;

var express = require('express');
var router = express.Router();
let chats = require('../controllers/chat');

router.get('/', chats.get_chats);

//router.get('/id/:chat_id', chats.get_country)

router.post('/find', chats.find_friend);

module.exports = router;

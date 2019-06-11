var express = require('express');
var router = express.Router();
let chats = require('../controllers/chat');

router.get('/', chats.get_chats);
router.post('/find', chats.find_friend);
router.post('/block', chats.block_user);
router.post('/unblock', chats.unblock_user);

module.exports = router;

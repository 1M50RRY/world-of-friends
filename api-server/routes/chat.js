var express = require('express');
var router = express.Router();
let chats = require('../controllers/chat');

router.get('/', chats.getChats);
router.post('/find', chats.findFriend);
router.post('/block', chats.blockUser);
router.post('/unblock', chats.unblockUser);
router.post('/send', chats.sendMessage);

module.exports = router;

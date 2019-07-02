var express = require('express');
var router = express.Router();
let users = require('../controllers/user');
let multer = require('../db/config/storage')
const fileType = require('file-type');

validate_format = (req, res, next) => {
  let mime = fileType(req.file.buffer);

  if (!mime || !accepted_extensions.includes(mime.ext))
    return next(new Error('The uploaded file is not in ' + accepted_extensions.join(", ") + ' format!'));

  next();
}

router.post('/login', users.login);
router.get('/get', users.getUser)
router.post('/add', multer.upload.single('avatar'), validate_format, users.addUser);

module.exports = router;

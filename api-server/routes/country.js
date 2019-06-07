var express = require('express');
var router = express.Router();
let countries = require('../controllers/country');

router.get('/', countries.get_countries);

router.get('/id/:country_id', countries.get_country)

router.post('/add', countries.add_country);

module.exports = router;

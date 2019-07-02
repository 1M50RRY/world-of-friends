var express = require('express');
var router = express.Router();
let countries = require('../controllers/country');

router.get('/', countries.getCountries);
router.get('/id/:country_id', countries.getCountry)
router.post('/add', countries.addCountry);

module.exports = router;

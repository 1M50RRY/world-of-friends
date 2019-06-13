let models = require('../db/models');

exports.getCountries = (req, res, next) => {
    models.Country.findAll().then(countries => {
        res.send(
            {
                status: "OK",
                countries: countries
            }
        );
    });
}

exports.getCountry = (req, res, next) => {
    return models.Country.findOne({
        where: {
            id: req.params.country_id
        }
    }).then(country => {
        res.send({status: "OK", country});
    });
}

exports.addCountry = (req, res, next) => {
    return models.Country.create({
        name: req.body.name,
        code: req.body.code,
        flag: req.body.flag
    }).then(country => {
        res.send({status: "OK"});
    });
}
let models = require('../db/models');

exports.get_countries = (req, res, next) => {
    models.Country.findAll().then(countries => {
        res.send(
            {
                status: "OK",
                countries: countries
            }
        );
    });
}

exports.get_country = (req, res, next) => {
    return models.Country.findOne({
        where: {
            id: req.params.country_id
        }
    }).then(country => {
        res.send({status: "OK", country});
    });
}

exports.add_country = (req, res, next) => {
    return models.Country.create({
        name: req.body.name,
        code: req.body.code,
        flag: req.body.flag
    }).then(country => {
        res.send({status: "OK"});
    });
}
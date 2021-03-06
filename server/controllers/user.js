let models = require('../db/models');
var api = require('../utils/api');
let bcrypt = require('bcrypt');
const axios = require('axios');

exports.getUser = (req, res, next) => {
    if (req.session.userId)
        api.getUser(req).then(user => {
            models.UserData.findOne({
                where: {
                    id: user.userDataId
                }
            }).then(userData => {
                user.password = 'lol';
                userData.avatar = 'http://localhost:3000' + userData.avatar;
                res.send(
                    {
                        status: "OK",
                        user: user,
                        userData: userData
                    }
                );
            });
        });
    else
        res.send({
            status: "NOT_AUTHENTICATED"
        });
}

exports.login = (req, res, next) => {
    return models.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (bcrypt.compareSync(req.body.password, user.password))
            models.UserData.findOne({
                where: {
                    id: user.userDataId
                }
            }).then(userData => {
                req.session.userId = user.id;
                req.session.cookie.maxAge = 14 * 24 * 3600000;
                user.password = 'lol';
                userData.avatar = 'http://localhost:3000' + userData.avatar;
                console.log("Set session: ", req.session.id);
                res.send(
                    {
                        status: "OK",
                        user: user,
                        userData: userData
                    }
                );
            });
        else res.send({status: "WRONG_PASSWORD"});
    });
}

exports.addUser = (req, res, next) => {
    var hash = bcrypt.hashSync(req.body.password, 10);
    var ip = '104.194.220.62' // For local tests;
    var api_url = 'http://api.ipstack.com/' +  ip + '?access_key=3e90dc099638b5b854dfcab26a2a5058';
    axios.get(api_url).then(response => {
        models.User.findAll({
            where: {
                email: req.body.email
            }
        }).then(existingUser => {
            if (existingUser.length == 0) {
                models.Country.findOne({
                    where: {
                        code: response.data.country_code
                    }
                }).then(country => {
                    models.UserData.create({
                        name: req.body.name,
                        gender: req.body.gender,
                        last_login: new Date().toLocaleString(),
                        avatar: '/images/' + req.file.filename,
                        theme: false,
                        countryId: country.id,
                        session: "1"
                    }).then(userData => {
                        models.User.create({
                            email: req.body.email,
                            password: hash,
                            userDataId: userData.id,
                        }).then(user => {
                            req.session.userId = user.id;
                            req.session.cookie.maxAge = 14 * 24 * 3600000;
                            user.password = 'lol';
                            userData.avatar = 'http://localhost:3000' + userData.avatar;
                            res.send({ 
                                status: "OK", 
                                user: user, 
                                userData: userData 
                            });
                        });
                    });
                });
            }
        });
    });
}
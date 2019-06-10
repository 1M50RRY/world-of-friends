let models = require('../db/models');
let bcrypt = require('bcrypt');
const axios = require('axios');

exports.get_users = (req, res, next) => {
    models.User.findAll().then(users => {
    }).then(users => {
        models.UserData.findAll().then(usersData => {
            res.send(
                {
                    status: "OK",
                    users: users,
                    usersData: usersData
                }
            );
        });
    });
}

exports.get_user = (req, res, next) => {
    console.log("Got session: ", req.session.id);
    console.log(req.session);
    if (req.session.userId)
        return models.User.findOne({
            where: {
                id: req.session.userId
            }
        }).then(user => {
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

exports.add_user = (req, res, next) => {
    var hash = bcrypt.hashSync(req.body.password, 10);
    var ip = req.connection.remoteAddress === '::ffff:127.0.0.1' ? '78.30.248.52' : req.connection.remoteAddress;
    var api_url = 'http://api.ipstack.com/' +  ip + '?access_key=3e90dc099638b5b854dfcab26a2a5058';
    return axios.get(api_url).then(response => {
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
                    res.send({ 
                        status: "OK", 
                        user: user, 
                        userData: userData 
                    });
                });
            });
        });
    });
}
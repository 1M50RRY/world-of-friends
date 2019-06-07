let models = require('../db/models');
const axios = require('axios');

exports.get_users = (req, res, next) => {
    models.User.findAll().then(users => {
        res.send(users);
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
    if (req.session.id)
        return models.User.findOne({
            where: {
                id: req.session.id
            }
        }).then(user => {
            models.UserData.finOne({
                where: {
                    id: user.userDataId
                }
            }).then(userData => {
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

exports.add_user = (req, res, next) => {
    var hash = bcrypt.hashSync(req.body.password, 10);
    let avatar = req.files.avatar;
    avatar.mv('public/images/', function (err) {
        if (err)
            return res.status(500).send(err);
    });
    return axios.get(
        'http://api.ipstack.com/' +
        req.headers['x-forwarded-for'] || req.connection.remoteAddress
        + '?access_key=3e90dc099638b5b854dfcab26a2a5058'
    ).then(response => {
        models.Country.findOne({
            where: {
                code: JSON.parse(response.data).country_code
            }
        }).then(country => {
            models.UserData.create({
                name: req.body.name,
                gender: req.body.gender,
                last_login: new Date().format('m-d-Y h:i'),
                avatar: 'public/images/' + avatar.name,
                countryId: country.id,
                session: "1"
            }).then(userData => {
                models.User.create({
                    email: req.body.email,
                    password: hash,
                    userDataId: userData.id,
                }).then(user => {
                    res.send({ status: "OK" });
                });
            });
        });
    });
}
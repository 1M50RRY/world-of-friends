let models = require('../db/models');
var db = require('../db/models/index');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

exports.get_chats = (req, res, next) => {
    return models.User.findOne({
        where: {
            id: req.session.userId
        }
    }).then(user => {
        
    });
}

exports.find_friend = (req, res, next) => {
    var date = new Date();
    console.log(req.body);
    console.log(req.session.userId);
    return models.User.findOne({
        where: {
            id: req.session.userId
        }
    }).then(user => {
        models.Country.findOne({
            where: {
                name: req.body.country
            }
        }).then(country => {
            models.UserData.findOne({
                order: db.sequelize.random(),
                where: {
                    countryId: country.id,
                    id:{[db.Sequelize.Op.ne]: user.id}
                }
            }).then(recipent => {
                models.Chat.create({
                    user1Id: user.id,
                    user2Id: recipent.id,
                    blockedById: null
                }).then(chat => {
                    models.Message.create({
                        chatId: chat.id,
                        recipentId: recipent.id,
                        date: monthNames[date.getMonth()] + ' ' + date.getDay(),
                        time: date.getHours() + ':' + date.getMinutes(),
                        isRead: false,
                        content: req.body.content
                    }).then(message => {
                        res.send({status: 'OK'});
                    });
                });
            });
        });
    });
}
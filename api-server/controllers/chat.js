let models = require('../db/models');
var db = require('../db/models/index');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Op = db.Sequelize.Op;

exports.get_chats = (req, res, next) => {
    return models.User.findOne({
        where: {
            id: req.session.userId
        }
    }).then(user => {
        models.Chat.findAll({
            where: {
                [Op.or]: [{user1Id: user.id}, {user2Id: user.id}]
            },
            raw : true
        }).then(async chats => {
            var response = await Promise.all(chats.map(async chat => {
                chat.friend = await models.UserData.findOne({
                    where: {
                        id: user.id === chat.user1Id ? chat.user2Id : chat.user1Id
                    },
                    raw: true
                });
                chat.friend.country = await models.Country.findOne({
                    where: {
                        id: chat.friend.countryId
                    },
                    raw: true
                });
                chat.messages = await models.Message.findAll({
                    where: {
                        chatId: chat.id
                    },
                    raw: true
                });
                chat.messages.map(message => {
                    message.isMine = message.recipentId !== user.id;
                });
                chat.friend.avatar = 'http://localhost:3000' + chat.friend.avatar;
                return chat;
            }));
            response = response.sort(chat => chat.messages[chat.messages.length - 1].id);
            console.log(response);
            res.send({status: 'OK', chats: response})
        });
    });
}

exports.find_friend = (req, res, next) => {
    var date = new Date();
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
                        date: monthNames[date.getMonth()] + ' ' + date.getDate(),
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
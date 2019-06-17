var models = require('../db/models');
var db = require('../db/models/index');
var api = require('../utils/api');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Op = db.Sequelize.Op;

exports.getChats = (req, res, next) => {
    api.getUser(req).then(user => {
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
            res.send({status: 'OK', chats: response})
        });
    });
}

exports.readChat = (req, res, next) => {
    api.getUser(req).then(user => {
        models.Message.update(
            {
                isRead: true
            },
            {
                where: {
                    chatId: req.body.chatId,
                    recipentId: user.id
                }
            }
        ).then(messages => {
            res.send({status: 'OK'});
        });
    });
}

exports.sendMessage = (req, res, next) => {
    var date = new Date();
    api.getUser(req).then(user => {
        models.Message.create({
            chatId: req.body.chatId,
            recipentId: req.body.recipentId,
            date: api.getDate(),
            time: date.getHours() + ':' + date.getMinutes(),
            isRead: false,
            content: req.body.content
        }).then(message => {
            res.send({status: 'OK'});
        });
    });
}

exports.blockUser = (req, res, next) => {
    return models.Chat.update(
        {
            blockedById: req.session.userId
        },
        {
            where: {id: req.body.chatId}
        }
    ).then(chat => {
        res.send({status: 'OK'});
    });
}

exports.unblockUser = (req, res, next) => {
    return models.Chat.update(
        {
            blockedById: null
        },
        {
            where: {id: req.body.chatId}
        }
    ).then(chat => {
        res.send({status: 'OK'});
    });
}

exports.findFriend = (req, res, next) => {
    var date = new Date();
    api.getUser(req).then(user => {
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
                models.Chat.findAll({
                    where: {
                        [Op.or]: [{user1Id: user.id}, {user2Id: recipent.id}],
                        [Op.or]: [{user1Id: recipent.id}, {user2Id: user.id}]
                    }
                }).then(sameChat => {
                    if (sameChat.length === 0) {
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
                    }
                });
            });
        });
    });
}
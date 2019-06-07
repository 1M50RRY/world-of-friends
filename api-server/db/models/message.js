'use strict';
module.exports = (sequelize, DataTypes) => {
    var Message = sequelize.define('Message', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chatId: {
            type: DataTypes.INTEGER,
            references: {model: 'chats', key: 'id'}
        },
        recipentId: {
            type: DataTypes.INTEGER,
            references: {model: 'users', key: 'id'}
        },
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        isRead: DataTypes.BOOLEAN,
        content: DataTypes.TEXT
    });

    return Message;
}
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Message = sequelize.define('Message', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chatId: {
            type: DataTypes.INTEGER
        },
        recipentId: {
            type: DataTypes.INTEGER
        },
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        isRead: DataTypes.BOOLEAN,
        content: DataTypes.TEXT
    });

    return Message;
}
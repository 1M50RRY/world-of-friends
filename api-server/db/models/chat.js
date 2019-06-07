'use strict';
module.exports = (sequelize, DataTypes) => {
    var Chat = sequelize.define('Chat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user1Id: {
            type: DataTypes.INTEGER,
            references: {model: 'users', key: 'id'}
        },
        user2Id: {
            type: DataTypes.INTEGER,
            references: {model: 'users', key: 'id'}
        },
        blockedById: {
            type: DataTypes.INTEGER,
            references: {model: 'users', key: 'id'}
        }
    });

    return Chat;
}
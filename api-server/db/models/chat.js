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
        },
        user2Id: {
            type: DataTypes.INTEGER,
        },
        blockedById: {
            type: DataTypes.INTEGER,
        }
    });

    return Chat;
}
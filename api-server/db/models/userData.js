'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserData = sequelize.define('UserData', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        session: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        theme: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        countryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return UserData;
}
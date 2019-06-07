'use strict';
module.exports = (sequelize, DataTypes) => {
    var Country = sequelize.define('Country', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flag: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Country;
}
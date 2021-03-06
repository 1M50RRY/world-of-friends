'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('countries', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            code: {
                type: Sequelize.STRING,
                allowNull: false
            },
            flag: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Countries');
    }
}
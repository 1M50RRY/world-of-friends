'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users_data', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            session: {
                type: Sequelize.STRING,
                allowNull: false
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: false
            },
            last_login: {
                type: Sequelize.STRING,
                allowNull: false
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: false
            },
            theme: {
                type: Sequelize.BOOLEAN,
                default: false
            },
            countryId: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('users_data');
    }
}
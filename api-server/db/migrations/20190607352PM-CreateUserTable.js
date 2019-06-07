'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            userDataId: {
                type: Sequelize.INTEGER,
            }
        });
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('users');
    }
}
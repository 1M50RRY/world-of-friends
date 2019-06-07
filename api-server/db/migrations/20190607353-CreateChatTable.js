'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('chats', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user1Id: {
                type: Sequelize.INTEGER,
                references: {model: 'users', key: 'id'}
            },
            user2Id: {
                type: Sequelize.INTEGER,
                references: {model: 'users', key: 'id'}
            },
            blockedById: {
                type: Sequelize.INTEGER,
                references: {model: 'users', key: 'id'}
            }
        });
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('chats');
    }
}
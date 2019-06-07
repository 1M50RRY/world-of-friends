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
            },
            user2Id: {
                type: Sequelize.INTEGER,
            },
            blockedById: {
                type: Sequelize.INTEGER,
            }
        });
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('chats');
    }
}
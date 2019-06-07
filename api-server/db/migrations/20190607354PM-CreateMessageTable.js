'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('messages', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            chatId: {
                type: Sequelize.INTEGER,
                references: {model: 'chats', key: 'id'}
            },
            recipentId: {
                type: Sequelize.INTEGER,
                references: {model: 'users', key: 'id'}
            },
            date: Sequelize.STRING,
            time: Sequelize.STRING,
            isRead: Sequelize.BOOLEAN,
            content: Sequelize.TEXT
        });
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('messages');
    }
}
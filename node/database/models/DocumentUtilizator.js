const Sequelize = require('sequelize');
const sequelize = require('../database');

const DocumentUser = sequelize.define('DocumentUser', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    document_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    role: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    tableName: 'document_users',
    timestamps: false,
});

module.exports = DocumentUser;

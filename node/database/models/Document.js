const Sequelize = require('sequelize');
const sequelize = require('../database');

const Document = sequelize.define('Document', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING,
    path: Sequelize.STRING,
    text: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    tableName: 'document',
    timestamps: false,
});

module.exports = Document;

const Sequelize = require('sequelize');
const sequelize = require('../database');

const Receipt = sequelize.define('Receipts', {
    id_receipt: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING,
    path: Sequelize.STRING,
    text: Sequelize.TEXT,
    id_utilizator: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Utilizatori',
            key: 'id_utilizator',
        }
    },
    data: Sequelize.DATE,
}, {
    tableName: 'Receipts',
    timestamps: false,
});

module.exports = Receipt;
const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('Users', {
    id_utilizator: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: Sequelize.STRING,
    parola: Sequelize.STRING,
    email: Sequelize.STRING,
    telefon: Sequelize.STRING
}, {
    tableName: 'Users',
    timestamps: false,
});

module.exports = User;

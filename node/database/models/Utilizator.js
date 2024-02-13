const Sequelize = require('sequelize');
const sequelize = require('../database');

const Utilizator = sequelize.define('Utilizatori', {
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

    tableName: 'Utilizatori',
    timestamps: false,
});

module.exports = Utilizator;

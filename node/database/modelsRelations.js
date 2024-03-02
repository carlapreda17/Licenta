const Utilizator = require('./models/Utilizator');
const Receipt = require('./models/Receipt');

Receipt.belongsTo(Utilizator, {
    foreignKey: 'id_utilizator'
});

Utilizator.hasMany(Receipt, {
    foreignKey: 'id_utilizator'
});

module.exports = {
    Utilizator,
    Receipt
};
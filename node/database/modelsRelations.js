const User = require('./models/User');
const Receipt = require('./models/Receipt');

Receipt.belongsTo(User, {
    foreignKey: 'id_utilizator'
});

User.hasMany(Receipt, {
    foreignKey: 'id_utilizator'
});

module.exports = {
    User,
    Receipt
};
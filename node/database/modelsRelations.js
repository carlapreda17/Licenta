const Document = require('models/Document');
const Utilizator = require('models/Utilizator');

Utilizator.belongsToMany(Document, {
    through: DocumentUser,
    foreignKey: 'user_id',
    otherKey: 'document_id'
});

Document.belongsToMany(User, {
    through: DocumentUser,
    foreignKey: 'document_id',
    otherKey: 'user_id'
});

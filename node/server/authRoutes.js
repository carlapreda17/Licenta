const express = require('express');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const router = express.Router();

const User = require('../database/models/User');

router.post('/login', async(req, res) => {
    try {
        const {username, parola} = req.body;

        const user = await User.scope(null).findOne({
            where: {
                username: username
            }
        });

        if(!user) {
            return res.status(404).json({success: false, message: "User not found", data: {}});
        }

        const parolaValida = bcrypt.compareSync(parola, user.dataValues.parola);
        if (!parolaValida) {
            return res.status(403).json({success: false, message: "Not the same password", data: {}});
        }
        const {email,telefon,id_utilizator}=user;

        const token = jwt.sign({id: user.dataValues.id_utilizator}, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        });

        return res.status(200).json({success: true, message: "User logged in", data: {'token': token, 'username': username, 'email': email, 'telefon':telefon, 'id_utilizator': id_utilizator}});
    } catch(error) {
        console.error('Error:', error);
        res.status(500).json({success: false, message: 'An error occurred'});
    }
});

module.exports = router;
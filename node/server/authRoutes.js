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

router.put('/reset-password', async(req, res) => {
   try{
        const {parola,email,parolaNoua}=req.body;

        const user = await User.scope(null).findOne({
            where: {
                email: email
            }
        });
        const validPassword = bcrypt.compareSync(parola, user.dataValues.parola);

        if(!validPassword) {
           return res.status(401).json({success: false, message: "Incorrect password", data: {}});
        }
       const samePassword=bcrypt.compareSync(parolaNoua,user.dataValues.parola);

       if(samePassword){
              return res.status(409).json({success: false, message: "The new password is the same as the old one", data: {}});
       } else {
           const salt = bcrypt.genSaltSync(10);
           const newHashedPassword = bcrypt.hashSync(parolaNoua, salt);
           await user.update({parola: newHashedPassword});

           return res.status(200).json({success: true, message: "Password changed.", data: {}});

       }
   } catch(error) {
       console.error('Error:', error);
       res.status(500).json({success: false, message: 'An error occurred'});
   }
});
module.exports = router;
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require('../database/models/User');

router.post('/signUp', async (req, res) => {
    try {
        const {username, parola, email, telefon} = req.body;


        const existaUserNume = await User.findOne({
            where: { username: username }
        });
        if (existaUserNume) {
            return res.status(409).json({ success: false,field:'username', message: "Username already in use." });
        }

        const existaUserEmail = await User.findOne({
            where: {
                'email': email
            }
        });
        if (existaUserEmail) {
            return res.status(409).json({success: false,field:'email', message: "Email already in use."});
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(parola, salt);


        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
        const phoneRegex = /^07\d{8}$/;
        const nameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
        const mailRegex = /\S+@\S+\.\S+/;

        let errors = [];

         if (!nameRegex.test(username)) {
           errors.push("Invalid name.");
         }

        if (!passwordRegex.test(parola)) {
          errors.push("Invalid password.");
         }

         if (!mailRegex.test(email)) {
           errors.push("Invalid email.");
         }

         if (!phoneRegex.test(telefon)) {
            errors.push("Invalid phone number.");
         }

         if (errors.length > 0) {
             return res.status(400).json({success: false, message: "The sent data is invalid.", errors: errors});
         }

        await User.create({
            username,
            parola: hash,
            email,
            telefon,

        });

        return res.status(201).json({success: true, message: 'User added'});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({success: false, message: 'An error occurred'});
    }
});

module.exports = router;
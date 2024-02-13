const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const Utilizator = require('../database/models/Utilizator');

router.post('/signUp', async (req, res) => {
    try {
        const {username, parola, email, telefon} = req.body;
        console.log(req.body);

        const existaUser = await Utilizator.findOne({
            where: {
                'email': email
            }
        });
        if (existaUser) {
            return res.status(409).json({success: false, message: "Email already in use."});
        }

        console.log('Password:', parola);
        const salt = bcrypt.genSaltSync(10);
        console.log('Salt:', salt);
        const hash = bcrypt.hashSync(parola, salt);
        console.log(hash)

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
        const phoneRegex = /^07\d{8}$/;
        const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        const mailRegex = /\S+@\S+\.\S+/;

        let errors = [];

        // if (!nameRegex.test(username)) {
        //     errors.push("Invalid name.");
        // }
        //
        // if (!passwordRegex.test(parola)) {
        //     errors.push("Invalid password.");
        // }
        //
        // if (!mailRegex.test(email)) {
        //     errors.push("Invalid email.");
        // }
        //
        // if (!phoneRegex.test(telefon)) {
        //     errors.push("Invalid phone number.");
        // }

        // if (errors.length > 0) {
        //     return res.status(400).json({success: false, message: "The sent data is invalid.", errors: errors});
        // }

        await Utilizator.create({
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
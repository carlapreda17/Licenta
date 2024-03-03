const express = require('express');
const multer=require('multer');


const router = express.Router();
const Receipt=require('../database/models/Receipt');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {

        cb(null, file.fieldname + '-'  + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/upload', upload.single('photo'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('Niciun fișier nu a fost încărcat.');
    }

    const userId = req.body.id
    const filePath = req.file.path;

    console.log('Calea fișierului:', filePath)
    try {
        const newReceipt = await Receipt.create({
            path: filePath,
            id_utilizator: userId

        });
        res.status(201).send({ message: 'Poza încărcata cu succes', data: { path: filePath }});
    } catch (error) {
        console.error('Eroare la salvarea căii în baza de date:', error);
        res.status(500).send({ message: 'Eroare la salvarea informațiilor în baza de date' });
    }
});

module.exports = router;
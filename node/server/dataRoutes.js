const express = require('express');
const multer=require('multer');
const tesseract = require("node-tesseract-ocr")
const sharp=require('sharp');



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
    const modifiedFilePath = 'uploads/modified-' + req.file.filename;

    console.log('Calea fișierului:', filePath)

    sharp(filePath)
        .rotate(90)
        .resize(1000)
        .threshold()
        .sharpen()
        .modulate({
            contrast: 1.5,
        })
        .toFile(modifiedFilePath, function(err) {
            if (err) {
                console.error('Error occurred while rotating image:', err);
            } else {
                console.log('Image rotated successfully.');
            }
        });

        const config = {
            lang: "eng",
            oem: 1,
            psm: 3
        };

        tesseract.recognize(modifiedFilePath, config)
            .then((text) => {
                console.log("Result:", text);

            })
            .catch((error) => {
                console.log("Error:", error.message);
            });

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
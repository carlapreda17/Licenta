const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const tesseract = require("node-tesseract-ocr")

const Receipt = require('./database/models/Receipt');

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN
}));


const userRoutes = require('./server/userRoutes');
const authRoutes = require('./server/authRoutes');
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

/**
 *
 */
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
});

/**
 * Route that handles document upload
 *
 * @post
 * @input data - the document to be uploaded (PDF, PNG, JPG, JPEG) (mime)
 */
app.get('/test', function() {
    const imagePath = "img2.jpeg";
    const processedImagePath = "processed_img2.jpeg";
    const config = {
        lang: "eng",
        oem: 1,
        psm: 3,
        binary: "tesseract"
    }

    tesseract
        .recognize("img2.jpeg", config)
        .then((text) => {
            console.log("Result:", text)
        })
        .catch((error) => {
            console.log(error.message)
        })

    // de scos ocr de aici, de facut service de ocr, apelat service de aici
    // creat model
    // return json
});
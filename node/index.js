const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const port = process.env.PORT;
const {VertexAI, HarmCategory, HarmBlockThreshold} = require('@google-cloud/vertexai');


const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN
}));


const userRoutes = require('./server/userRoutes');
const authRoutes = require('./server/authRoutes');
const dataRoutes = require('./server/dataRoutes');
const tesseract = require("node-tesseract-ocr");
const sharp = require("sharp");
const {response} = require("express");

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

/**
 *
 */
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
});

const project = 'licenta-415810';
const location = 'europe-west3';
// For the latest list of available Gemini models in Vertex, please refer to https://cloud.google.com/vertex-ai/docs/generative-ai/learn/models#gemini-models
const textModel =  'gemini-1.0-pro';
const visionModel = 'gemini-1.0-pro-vision';

const vertex_ai = new VertexAI({project: project, location: location});

// Instantiate models
const generativeModel = vertex_ai.getGenerativeModel({
    model: textModel,
    safety_settings: [{category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE}],
    generation_config: {max_output_tokens: 256},
});

const generativeVisionModel = vertex_ai.getGenerativeModel({
    model: visionModel,
});




// app.get('/tstst', function() {
//     let filePath = 'test4_cropped.jpeg';
//     let modifiedFilePath = filePath.replace('.jpeg', new Date().getTime() + '-modified.jpeg');
//     sharp(filePath)
//         .greyscale() // Convert to grayscale
//         .normalize() // Normalize the histogram to spread out the brightness values
//         .sharpen() // Sharpen the image to make text edges crisper
//         // .threshold(1) // Apply binarization thresholding
//         .median()
//         .modulate({
//             saturation: 2,
//             contrast: 5,
//             brightness: 0,
//         })
//         // .rotate(90)
//         // .resize(1000)
//         // .threshold()
//         // .modulate({
//         //     saturation: 2,
//         //     contrast: 5,
//         //     brightness: 0,
//         // })
//         // .sharpen()
//         .toFile(modifiedFilePath, function(err) {
//             if (err) {
//                 console.error('Error occurred while rotating image:', err);
//             } else {
//                 console.log('Image rotated successfully.');
//             }
//         });
//
//     // return response.status(200).json({success: true, message: 'Image rotated successfully.'});
// });
//
//
// /**
//  * Route that handles document upload
//  *
//  * @post
//  * @input data - the document to be uploaded (PDF, PNG, JPG, JPEG) (mime)
//  */
// app.get('/test', function() {
//     const config = {
//         lang: "eng",
//         oem: 1,
//         psm: 3,
//         binary: "tesseract"
//     }
//
//     tesseract
//         .recognize('imgTest.jpeg', config)
//         .then((text) => {
//             console.log("Result:", text)
//         })
//         .catch((error) => {
//             console.log(error.message)
//         })
//
//     // de scos ocr de aici, de facut service de ocr, apelat service de aici
//     // creat model
//     // return json
// });
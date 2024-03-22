const express = require('express');
const multer=require('multer');
const tesseract = require("node-tesseract-ocr")
const sharp=require('sharp');
const {VertexAI, HarmCategory, HarmBlockThreshold} = require('@google-cloud/vertexai');
const fs = require("fs");

const router = express.Router();
const Receipt=require('../database/models/Receipt');


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
function imageToBase64(imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    const image64 = imageBuffer.toString('base64');
    return image64;
}

async function multiPartContentImageString(imageBase64) {
    // Replace this with your own base64 image string
    const filePart = {inline_data: {data: imageBase64, mime_type: 'image/jpeg'}};
    const textPart = {text: 'Return JSON of contents of image, classified by items and total price'};
    const request = {
        contents: [{role: 'user', parts: [textPart, filePart]}],
    };
    const resp = await generativeVisionModel.generateContentStream(request);
    const contentResponse = await resp.response;
    return contentResponse.candidates[0].content.parts[0].text;
}



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
    const imageBase64=imageToBase64(filePath);
    const rawJsonText=await multiPartContentImageString(imageBase64);
    const jsonText = rawJsonText.replace(/```json\n|\n```|```JSON\n|\n```/g, '');
    // Parse the JSON string into a JavaScript object
    const jsonObject = JSON.parse(jsonText);
    if (jsonObject.hasOwnProperty('total_price')) {
        jsonObject.total = jsonObject.total_price;
        delete jsonObject.total_price;
    }

    console.log(jsonObject);
    const items = jsonObject.items;

    const itemsMap=new Map();
    items.forEach(item => {
        const name = item.name;
        const price = item.price;

        console.log(`Item Name: ${name}, Price: ${price}`);
        itemsMap.set(name,price);
    });
    const itemsArray = Array.from(itemsMap).map(([name, price]) => ({ name, price }));
    const total = jsonObject.total;
    console.log(`Total: ${total}`);
    try {
        const newReceipt = await Receipt.create({
            path: filePath,
            id_utilizator: userId

        });
        res.status(201).send({ message: 'Poza încărcata cu succes', data: { path: filePath,total:total,items:itemsArray}});
    } catch (error) {
        console.error('Eroare la salvarea căii în baza de date:', error);
        res.status(500).send({ message: 'Eroare la salvarea informațiilor în baza de date' });
    }
});

module.exports = router;
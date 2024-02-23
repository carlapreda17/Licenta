const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN
}));


const userRoutes = require('./server/userRoutes');
const authRoutes = require('./server/authRoutes');
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
});
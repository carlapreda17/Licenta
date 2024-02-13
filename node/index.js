const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://192.168.100.64:8081'
}));


const userRoutes = require('./server/userRoutes');
const authRoutes = require('./server/authRoutes');
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(8085, ()=> {
    console.log('Server listening on port 8085');
});
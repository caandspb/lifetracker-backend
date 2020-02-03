require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = '3000';

mongoose.connect(process.env.DB_CONNECTION_STRING,  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', () => {
    console.log('Connection error');
});

db.on('open', () => {
    console.log('Connection open');
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
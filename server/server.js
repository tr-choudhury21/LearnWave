const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const dbConnection = require('./database/dbConnection');

const app = express();

const PORT = process.env.PORT || 6000;


app.use(cors({
    origin: process.env.CLIENT_URI,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"], // replace with your frontend URL
    credentials: true,
}));

app.use(express.json());

dbConnection();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});


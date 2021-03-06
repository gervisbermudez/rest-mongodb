const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Import Routes
const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);

//Routes
app.get('/', (req, res) => {
    res.send("Hello Word");
});

//Conect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => { console.log("Connected with DB!"); });

app.listen('3000');
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT , async() => {
    await connect();
    console.log(`Listening to Port : ${PORT}`)
})

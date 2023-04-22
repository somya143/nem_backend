const mongoose = require("mongoose");
const MONGO_URL = process.env.DB_URI 

const connect = async () => mongoose.connect(MONGO_URL);

module.exports = connect;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type: String , required: [true , "Please provide your name"]},
    email : {type: String , required: [true, "Please provide your email-id"], unique: true},
    password: {type: String , required: [true , "Please provide your password"] },
    age: {type: Number},
    gender: {type: String},
    role: {
        type: String,
        required : true,
        enum: ["customer" , "seller" , "admin"]
    }
},{
    versionKey : false,
    timestamps : true
});

const User = mongoose.model("user" , userSchema);

module.exports =    User;
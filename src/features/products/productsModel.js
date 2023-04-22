const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {type: String , required: [true, "Please provide your name"], trim:true},
    title : {type: String , required: [true, "Please provide title"]},
    description: {type: String },
    price : {type: Number , required : [true, "Please provide your age"], maxLength:[8, "Please provide price"]},
    image : {type: String , required : [true, "Please provide image"]}
},
{
    versionKey : false,
    timestamps: true
}
);

const Product = mongoose.model("product" , productSchema);

module.exports = Product;
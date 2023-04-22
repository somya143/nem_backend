const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref : "user",
        required : true
    },
    product:{
        type: mongoose.Types.ObjectId,
        ref: "product",
        required: true
    },
    quantity: {type: Number , required: true, min:1},
    delivered: {type: Boolean , required: true}
},
{
    versionKey: false,
    timestamps: true
}
);

const Cart = mongoose.model("cart" , cartSchema);

module.exports = Cart;
const express = require("express");
const Cart = require("./cartModel");
const authMiddleware = require("../../authMiddleware/authMiddleware");
const app = express.Router();

app.get("/:id" ,async(req,res) => {
    // if(req.id !== req.params.id){
    //     res.status(404).send({error:true , message: "Cart Id not found"})
    // }
    let id = req.params.id;
    try {
        let cart = await Cart.findById(id).populate(["product" , "user"])
       return res.status(200).send(cart)
    } catch (error) {
        return res.status(401).send({error:true , message: "Something went wrong"});
    }
});

app.post("/" , async(req,res) => {
let { user,product,quantity,delivered } = req.body;
try {
    let cart = await Cart.create({ user,product,quantity,delivered });
    res.status(200).send({ error: false , message: "Cart created successfully" , cart})
} catch (error) {
    res.status(401).send({ error: true , message:error.message})
}
});

app.patch("/:cartId" , async(req,res) => {
    let cartId = req.params.cartId;
    try {
        let cart = await Cart.findByIdAndUpdate(cartId , {
            ...req.body
        },
        {new: true});
        res.status(200).send({error:false, message: "Cart updated successfully" , cart});
    } catch (error) {
        res.status(401).send({error:true , message:error.message});
    }
});

app.delete("/:cartId" , async(req,res) => {
    let cartId = req.params.cartId;
    try {
        let cart = await Cart.findByIdAndDelete(cartId);
        res.status(200).send({error: false, message: "Item deleted successfully" , cart})
    } catch (error) {
        res.status(401).send({ error: true , message: error.message });
    }
})

module.exports = app;
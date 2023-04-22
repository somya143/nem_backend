const express = require("express");
const Product = require("./productsModel");
const app = express.Router();

app.get("/:id" , async(req,res) => {
    const {limit=9 , page=1} = req.query;
    try {
        let id= req.params.id;
        let product = await Product.findById(id).limit(limit).skip((page-1) * limit)
        res.status(200).send(product)
    } catch (error) {
        res.status(404).send(error.message)
    }
});

app.get("/" , async(req,res) => {
    const {limit=9 , page=1} = req.query;
    try {
        let product = await Product.find().limit(limit).skip((page-1) *limit);
        res.status(200).send(product)
    } catch (error) {
        res.status(404).send(error.message)
    }
});

app.post("/" , async(req,res) => {
    try {
        let product = await Product.create({...req.body});
        res.status(201).send(product)
    } catch (error) {
        res.status(401).send(error.message)
    }
})

module.exports = app;
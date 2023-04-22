const express = require("express");
const User = require("./usersModel");
const app = express.Router();

app.post("/signup" , async(req,res) => {
    let {email,password,name,role,gender,age} = req.body
try {
    let user = await User.create({email,password,name,role,gender,age});
    return res.status(201).send({error:false , message: "User created successfully"})
} catch (error) {
    res.status(401).send({error: true , message : error.message})
}
});

app.post("/login" , async(req,res) => {
    let {email , password} = req.body;
    try {
        let user = await User.findOne({email});
        console.log(password);
        console.log(user);
        if(user.password !== password){
         res.status(404).send({error:true , message: "Wrong password. Please try again"})
        }else{
            res.status(200).send({error: false , message: "Login Successful" , token: `${user._id}-${user.email}-${user.password}-${user.role}`})
        }
    } catch (error) {
        res.status(401).send({error: true , message: error.message});
    }
})

module.exports = app;
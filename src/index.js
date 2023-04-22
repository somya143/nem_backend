require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const product = require("./features/products/ProductRoutes");
const user = require("./features/users/usersRoutes");
const cart = require("./features/cart/cartRoutes")

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", product);
app.use("/users" , user);
app.use("/carts" , cart )

app.listen(PORT , async() => {
    await connect();
    console.log(`Listening to Port : ${PORT}`)
})

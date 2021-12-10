const express = require("express");
const Productrouter = express.Router();
const Productmodel = require("./../model/product");
const data = require("./../struktur/productdb");

Productrouter.post("/lav", (req, res) => {
    const product = new Productmodel(req.body.name, req.body.brand, req.body.quantity);
    data.saveProduct(product);
    res.status(200).send(true);
})

Productrouter.delete("/delete", (req,res) => {
    const product = new Productmodel(req.body.name, req.body.brand, req.body.quantity);
    data.deleteProduct(product);
    res.status(200).send(true);
})

module.exports = Productrouter;
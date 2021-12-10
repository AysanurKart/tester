const express = require("express");
const formData = require('express-form-data');
const app = express ();
const PORT = 9000;

const BrugerKontrolCenter = require("./source/kontrolcenter/kontrolbruger");

app.use(express.static('./source/views'));
app.use(express.json());
app.use(express.static(". /uploads"));

const options = {
    uploadDir: "./uploads"
}

const products = [];

app.post('/item',formData.parse(options),(req, res, next) => {
    let { title, price, brand } = req.body;
    let thumbnail = req.files.thumbnail.path.replace('\\', '/');

    products.push({title, price, brand, thumbnail});

    console.log(products);
    res.send();
    res.redirect('/');
});

app.get('/items', (req, res) => {
    res.json(products);
})

app.use("/users", BrugerKontrolCenter);

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
});
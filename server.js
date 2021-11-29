const express = require("express");
const app = express ();
const PORT = 9000;

const BrugerKontrolCenter = require("./source/kontrolcenter/kontrolbruger");

app.use(express.static('./source/views'));
app.use(express.json());

app.use("/users", BrugerKontrolCenter);

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
});
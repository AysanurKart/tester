const express = require("express");
const router = express.Router();
const model = require("./../model/user");
const db = require("./../struktur/database");

router.post("/lav", (req, res) => {
    const user = new model(req.body.email, req.body.password);
    db.saveUser(user);
    res.status(200).send(true);
});


router.post("/login", (req, res) => {
    const user = new model(req.body.email, req.body.password);
    const found = db.findUser(user);
    if (found) {
        if (user.password == found.password) {
            res.status(200).send(true);
        }
    else {
        res.status(401).send(false);
    } 
}
    else {
        res.status(404).send(false)
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    if (req.session) {
      req.session.destroy(function (err) {
        if (err) {
          console.log(err)
        }
        console.log("Logged out");
      });
    }
  });


router.delete("/delete", (req, res) => {
    const user = new model(req.body.email, req.body.password);
    db.deleteUser(user);
    res.status(200).send(true);
})

module.exports = router;
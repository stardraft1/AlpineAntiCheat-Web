const express = require("express");
const app = express();

let alerts = [];

app.use(express.json());

app.post("/alert", (req, res) => {

    alerts.push({
        player: req.body.player,
        reason: req.body.reason,
        time: new Date()
    });

    res.sendStatus(200);
});

app.get("/alerts", (req, res) => {

    res.json(alerts);
});

app.listen(3000, () => {

    console.log("AlpineAntiCheat Web running");
});

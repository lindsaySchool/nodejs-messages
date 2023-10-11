// require express
const express = require('express');
// create a new Router
const router = express.Router();


router.get("/", (req, res) => {
    //iets teruggeven
    res.json({
        status: "success",
        message: "GETTING messages",
        data: [
            {
                id: 1,
                title: "Hello World",
                body: "This is a message"
            }
        ]
    });
});

router.post("/", (req, res) => {
    let message = req.body.message;
    //iets teruggeven
    res.json({
        status: "success",
        message: `POST ${message}`,
    });
});

module.exports = router;
// require express
const express = require('express');
// create a new Router
const router = express.Router();

/* // GET /api/v1/messages
router.get("/", (req, res) => {
    //iets teruggeven
    res.json({
        status: "success",
        message: "GETTING messages",
        data: [
            {
                user: "Ann",
                message: "Hello, I'm Ann!"
            },
            {
                user: "Ben",
                message: "Hello, I'm Ben!"
            },
            {
                user: "pikachu",
                message: "Pika pika!"
            }
        ]
    });
}); */
// GET /api/v1/messages/1
router.get("/:id", (req, res) => {
    let id = req.params.id;
    //iets teruggeven
    res.json({
        status: "success",
        message: `GETTING message with ID ${id}`,
        data: {
            user: "Ann",
            message: "Hello, I'm Ann!"
        }
    });
});
// POST /api/v1/messages
router.post("/", (req, res) => {
    let message = req.body.message;
    let user = req.body.message.user;
    let text = req.body.message.text;
    //iets teruggeven
    res.json({
        status: "success",
        message: `POST a new message for user ${user}`,
        data: {
            user: user,
            message: text
        }
    });
});
// PUT /api/v1/messages/1
router.put("/:id", (req, res) => {
    let id = req.params.id;
    let message = req.body.message;
    //iets teruggeven
    res.json({
        status: "success",
        message: `UPDATING a message with id ${id}`,
    });
});
// DELETE /api/v1/messages/1
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    //iets teruggeven
    res.json({
        status: "success",
        message: `DELETING a message with id ${id}`,
    });
});
// GET /api/v1/messages?user=username
router.get("/", (req, res) => {
    let user = req.query.user;
    //iets teruggeven
    res.json({
        status: "success",
        message: `GETTING messages for user ${user}`,
    });
        
});


module.exports = router;
const express = require('express');
const app = express();
const port = 3000;

// require logger
const logger = require('./middleware/logger');

// require routes
const messagesRouter = require('./routes/api/v1/messages');

//Import cors
const cors = require('cors');

//json body parser
app.use(express.json());
app.use(cors());
app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
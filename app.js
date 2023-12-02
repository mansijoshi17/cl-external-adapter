const createRequest = require("./index").createRequest;

const express = require("express");
const bodyParser = require("body-parser");
const emailjs = require("@emailjs/nodejs");
const { config } = require("dotenv");
const app = express();
const port = 8080;

config();

app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("POST Data: ", req.body);
  createRequest(req.body, (status, result) => {
    console.log("Result: ", result);
    res.status(status).json(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

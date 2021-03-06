"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { clients } = require("./data/clients");
const {
  handleAllClients,
  handleClientId,
  handleAddClient,
  handleDeleteClient,
} = require("./handlers/clientHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  // endpoint to access all clients
  .get("/clients", handleAllClients)
  .get("/clients/:id", handleClientId)
  .post("/clients", handleAddClient)
  .delete("/clients/:id", handleDeleteClient)

  // catch other and throw 404
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      error: "The page is not found! Try something else!",
    });
  })
  .listen(8000, () => console.log(`Listening on port 8000`));

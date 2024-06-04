const express = require("express");
const serverless = require("serverless-http");
const { connection } = require("./connection");
const { DataModel } = require("../model/data.model");

const app = express();
const dataRouter = express.Router();

app.use(express.json());

dataRouter.get("/", async (req, res) => {
  try {
    await connection;
    let data = await DataModel.find();
    res.send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

app.use("/.netlify/functions/data", dataRouter);

module.exports.handler = serverless(app);

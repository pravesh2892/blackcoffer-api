require("dotenv").config();
const express = require("express");
const { connection } = require("./netlify/functions/connection");
const { DataModel } = require("./model/data.model");

const app = express();
app.use(express.json());

const dataRouter = express.Router();

dataRouter.get("/", async (req, res) => {
  try {
    await connection;
    let data = await DataModel.find();
    res.send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

app.use("/data", dataRouter);
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`running at port ${PORT}`);
});

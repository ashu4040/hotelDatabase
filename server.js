const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

app.get("/", function (req, res) {
  res.send("Welcome");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("listening");
});

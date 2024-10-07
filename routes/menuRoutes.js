const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("menu saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("fetched menu");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;

    if (tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy") {
      const response = await MenuItem.find({ taste: tasteType });
      console.log(response);
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request boduy contains the person data

    //create a new person document using the mongoose model
    const newPerson = new Person(data);

    // Save the new personn to the database
    const savedPerson = await newPerson.save();
    console.log("data saved");
    res.status(200).json(savedPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("work fetched");
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

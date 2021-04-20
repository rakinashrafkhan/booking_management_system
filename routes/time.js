const express = require("express");
const router = express.Router();

// Importing time related middlewares
const timeMiddlewares = require("../middlewares/time");

// Get all times
router.get("/", timeMiddlewares.getTimes);

// Create a time
router.post("/create", timeMiddlewares.createTime);

// Update a time
router.put("/update", timeMiddlewares.updateTime);

// Delete a time
router.delete("/delete", timeMiddlewares.deleteTime);

module.exports = router;
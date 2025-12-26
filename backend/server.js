const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage
let electricityData = [];
let waterData = [];
let wasteData = [];

// Health check
app.get("/", (req, res) => {
  res.send("GreenGauge Backend Running");
});

// Electricity
app.post("/api/electricity", (req, res) => {
  electricityData.push({ ...req.body, date: new Date() });
  res.json({ message: "Electricity data saved" });
});

// Water
app.post("/api/water", (req, res) => {
  waterData.push({ ...req.body, date: new Date() });
  res.json({ message: "Water data saved" });
});

// Waste
app.post("/api/waste", (req, res) => {
  wasteData.push({ ...req.body, date: new Date() });
  res.json({ message: "Waste data saved" });
});

// History
app.get("/api/history", (req, res) => {
  res.json({
    electricity: electricityData,
    water: waterData,
    waste: wasteData,
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

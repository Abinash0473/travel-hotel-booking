const express = require("express");
const Hotel = require("../models/Hotel");

const router = express.Router();

// GET /api/hotels
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    return res.json(hotels);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

// POST /api/hotels (for admin seeding; in real app protect this)
router.post("/", async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    return res.json(hotel);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

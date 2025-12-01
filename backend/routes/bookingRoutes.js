const express = require("express");
const Booking = require("../models/Booking");
const auth = require("../middleware/auth");

const router = express.Router();

// POST /api/bookings
router.post("/", auth, async (req, res) => {
  try {
    const { hotelId, checkIn, checkOut } = req.body;
    const booking = new Booking({
      userId: req.user.id,
      hotelId,
      checkIn,
      checkOut
    });

    await booking.save();
    return res.json(booking);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

// GET /api/bookings (current user's bookings)
router.get("/", auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate("hotelId");
    return res.json(bookings);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

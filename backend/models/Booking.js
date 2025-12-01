const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    hotelId: { type: mongoose.Types.ObjectId, ref: "Hotel", required: true },
    checkIn: { type: String, required: true },
    checkOut: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);

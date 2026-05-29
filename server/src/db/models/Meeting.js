const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema(
  {
    agenda: { type: String, required: true },
    participants: [
      {
        name: { type: String, required: true },
        hourlyRate: { type: Number, required: true },
      },
    ],
    lengthMinutes: { type: Number, required: true },
    totalCost: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meeting", meetingSchema);

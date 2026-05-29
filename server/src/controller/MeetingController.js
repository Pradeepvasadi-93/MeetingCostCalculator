const Meeting = require("../db/models/Meeting");

// @desc    Create a new meeting
// @route   POST /api/meetings
module.exports.createMeeting = async (req, res) => {
  try {
    const { agenda, participants = [], lengthMinutes = 0 } = req.body;

    const normalizedAgenda = String(agenda || "").trim();
    const normalizedLength = Number(lengthMinutes);
    const normalizedParticipants = Array.isArray(participants)
      ? participants.map((p) => ({
          name: String(p?.name || "").trim(),
          hourlyRate: Number(p?.hourlyRate ?? 0),
        }))
      : [];

    const invalidParticipant = normalizedParticipants.find(
      (p) => !p.name || Number.isNaN(p.hourlyRate)
    );

    if (
      !normalizedAgenda ||
      normalizedParticipants.length === 0 ||
      invalidParticipant ||
      !normalizedLength ||
      Number.isNaN(normalizedLength)
    ) {
      return res.status(400).json({
        message: "Missing or invalid required fields",
        details: {
          agenda: normalizedAgenda,
          participants: normalizedParticipants,
          lengthMinutes: normalizedLength,
        },
      });
    }

    const totalCost = normalizedParticipants.reduce(
      (sum, p) => sum + (p.hourlyRate * normalizedLength) / 60,
      0
    );

    const meeting = await Meeting.create({
      agenda: normalizedAgenda,
      participants: normalizedParticipants,
      lengthMinutes: normalizedLength,
      totalCost,
    });

    res.status(201).json(meeting);
  } catch (error) {
    console.error("❌ Error creating meeting:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation Error",
        error: error.message,
      });
    }

    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Get all meetings
// @route   GET /api/meetings
module.exports.getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().sort({ createdAt: -1 });
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


// @desc    Delete meeting
// @route   DELETE /api/meetings/:id
module.exports.deleteMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findByIdAndDelete(req.params.id);

    if (!meeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }

    res.json({ message: "Meeting deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting meeting:", error); // log full error
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const express = require("express");
const {
  createMeeting,
  getMeetings,
  deleteMeeting,
} = require("../controller/MeetingController");

const router = express.Router();

router.post("/", createMeeting);   // Create meeting
router.get("/", getMeetings);      // Get all meetings
router.delete("/:id", deleteMeeting); // Delete meeting by id

module.exports = router;

const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");

router.use(cookieParser());

const db = require("../../database/db");

// Middleware
const tokenVerification = require("../../middleware/verify");

router.post("/", tokenVerification, async (req, res) => {
  try {
    const hostID = req.user.id;
    // const attendantName = req.body.attendantName;
    const status = req.body.status;
    const meetingDate = req.body.date;
    const meetingTime = req.body.time;
    const meetingLocation = req.body.location;
    const meetingDescription = req.body.meetingDescription;
    const attendantID = req.body.attendantID;
    const attendantName = req.body.attendantName;

    const insertQuery = `
            INSERT INTO Meetings (Host, Attendant, Status, MeetingDate, MeetingTime, MeetingLocation, MeetingDescription, AttendantName)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

    console.log("Attendant ID:", attendantID);
    console.log("Attendant Name:", attendantName);
    console.log("Insert Query:", insertQuery);
    
    const dbInsertResult = await db.pool
      .promise()
      .execute(insertQuery, [
        hostID,
        attendantID,
        status,
        meetingDate,
        meetingTime,
        meetingLocation,
        meetingDescription,
        attendantName,
      ]);

    console.log("Meeting Created:", dbInsertResult);
    res.status(200).json({
      status: "success",
      message: "Meeting Created",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

module.exports = router;

import React, { useState, useEffect } from "react";

import { Grid, Paper, Typography } from "@mui/material";
import { MdOutlineSupervisorAccount } from "react-icons/md";

import { Header, AcceptMeetingForm } from "../components";

import axios from "../services/api";
import request from "../services/requests";

function MeetingRequest() {
  const [meetings, setMeetingRequests] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchMeetingRequests = async () => {
      try {
        const response = await axios.get(request.meetingRequests, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.status === 200) {
          console.log("Meeting requests:", response.data.data);
          setMeetingRequests(response.data.data);
        } else {
          console.error(
            "Error fetching meeting requests:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMeetingRequests();
  }, []);

  const handleAccept = (requestId) => {
    setSelectedMeeting(
      meetings.find((request) => request.senderId === requestId)
    );
    setOpenDialog(true);
    console.log(selectedMeeting);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Meetings" title="Accepted Requests" />
      <Grid container spacing={3}>
        {meetings.map((request) => (
          <Grid item key={request.id} xs={12} sm={6} md={4} lg={3}>
            <Paper
              elevation={0}
              style={{
                padding: "1.5rem",
                borderRadius: "1.5rem",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  type="button"
                  style={{
                    fontSize: "2rem",
                    borderRadius: "20%",
                    padding: "1rem",
                    backgroundColor: "#E5FAFB",
                    color: "#03C9D7",
                  }}
                  onClick={() => handleAccept(request.id)}
                >
                  <MdOutlineSupervisorAccount />
                </button>
                <div style={{ marginLeft: "1rem" }}>
                  <Typography variant="h6">{request.senderName}</Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <button
                      className="bg-teal-500 hover:bg-teal-600 text-white text-sm py-0.5 px-2 rounded"
                      onClick={() => handleAccept(request.senderId)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white text-sm py-0.5 px-2 rounded"
                      onClick={() => handleReject(request.senderId)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
              <Typography
                variant="body1"
                style={{ color: "rgba(0, 0, 0, 0.4)", marginTop: "1rem" }}
              >
                {request.meetingDescription}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <AcceptMeetingForm
        selectedMeeting={selectedMeeting}
        setSelectedMeeting = {setSelectedMeeting}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </div>
  );
}

export default MeetingRequest;

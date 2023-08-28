import { React, useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import AppBar from "@mui/material/AppBar";
import utton from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const RecordScreen = () => {
  const navigate = useNavigate();
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const [recorded, setRecorded] = useState(false);
  useEffect(() => {
    if (status == "recording") {
      setRecorded(true);
    }
  }, [status]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Record New Video
          </Typography>
          <Button
            onClick={() => {
              navigate("/");
            }}
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <div
        style={{
          alignSelf: "center",
        }}
      >
        <p>{status.toUpperCase()}</p>
        {!recorded && (
          <div
            style={{
              height: "400px",
              width: "800px",
              border: "10 black",
              backgroundColor: "#B0B7C0",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h5>Click Start to Start Recording</h5>
          </div>
        )}
        {recorded && (
          <video
            src={mediaBlobUrl}
            controls
            autoPlay
            loop
            width={800}
            height={400}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          ></video>
        )}
      </div>
      <div>
        <button
          style={{
            margin: "20px",
            padding: "20px",
            backgroundColor: "blueviolet",
            border: "0px",
            color: "white",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
          onClick={startRecording}
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          style={{
            margin: "20px",
            padding: "20px",
            backgroundColor: "blueviolet",
            border: "0px",
            color: "white",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Stop Recording
        </button>
      </div>
    </div>
  );
};

export default RecordScreen;

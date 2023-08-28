import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Email } from "@mui/icons-material";
const LoginScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    try {
      const payload = {
        uname: name,
        email: email,
      };

      const response = await fetch("http://localhost:4000/vloger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status == "200") {
        navigate("/record");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          backgroundColor: "rgba(10, 0, 255, 0.5)",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
          border: "3px solid rgba(0, 0, 255, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            style={{ color: "white", alignSelf: "center" }}
          >
            Login To Start Recording
          </Typography>
          <TextField
            label="Name"
            variant="filled"
            style={{ width: "400px", background: "white" }}
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
          <TextField
            label="Email"
            variant="filled"
            style={{ width: "400px", background: "white" }}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
          <button
            onClick={handleLogin}
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
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;

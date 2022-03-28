import React from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function ProfileInputSection({
  userInfo,
  handleUserInfoChange,
}) {
  const { first_name, last_name, gender } = userInfo;

  const inputList = [
    {
      text: "First Name",
      value: first_name,
      onInputChange: (e) => handleUserInfoChange("first_name", e.target.value),
    },
    {
      text: "Last Name",
      value: last_name,
      onInputChange: (e) => handleUserInfoChange("last_name", e.target.value),
    },
  ];

  const genderOption = ["Male", "Female", "Others"];

  return (
    <section className="regional-inputs">
      <Box
        sx={{
          paddingBlock: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {inputList.map((input) => {
          const { text, value, onInputChange } = input;

          return (
            <Box
              key={text}
              sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            >
              <Typography sx={{ width: "20%" }} variant="h6">
                {text}
              </Typography>
              <TextField
                id="outlined-helperText"
                value={value}
                sx={{ width: "10%", minWidth: "50ch" }}
                onChange={onInputChange}
              />
            </Box>
          );
        })}
        <Box
          key={"gender"}
          sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        >
          <Typography sx={{ width: "20%" }} variant="h6">
            {"Gender"}
          </Typography>
          <TextField
            select

            value={gender}
            onChange={(e) => handleUserInfoChange("gender", e.target.value)}
            sx={{ width: "5%", minWidth: "20ch" }}
          >
            {genderOption.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </section>
  );
}

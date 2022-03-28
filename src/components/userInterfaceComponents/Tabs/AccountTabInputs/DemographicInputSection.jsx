import React from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function DemographicInputSection({
  userInfo,
  handleUserInfoChange,
}) {
  const {
    veteran,
    religion,
    income_range,
    industry,
    ethnicity,
    education,
    marital_status,
  } = userInfo;

  const inputList = [
    {
      text: "Veteran",
      value: veteran === true ? "Yes" : "No",
      options: ["Yes", "No"],
      onInputChange: (e) =>
        handleUserInfoChange(
          "veteran",
          e.target.value === "Yes" ? true : false
        ),
    },
    {
      text: "Ethnicity",
      value: ethnicity,
      options: [
        "Asian",
        "White(Non-Hispanic)",
        "Hispanic",
        "Black or African American",
        "Native American",
        "Mixed-race",
        "Others",
      ],
      onInputChange: (e) => handleUserInfoChange("ethnicity", e.target.value),
    },
    {
      text: "Education",
      value: education,
      options: ["High School", "Diploma", "Bachelor's Degree", "Masters","Doctor","Others"],
      onInputChange: (e) =>
        handleUserInfoChange("education", e.target.value),
    },
    {
      text: "Religion",
      value: religion,
      options: [
        "Buddhism",
        "Christianity",
        "Hinduism",
        "Islam",
        "Judaism",
        "Agnostic",
        "Atheism",
      ],
      onInputChange: (e) => handleUserInfoChange("religion", e.target.value),
    },
    {
      text: "Income",
      value: income_range,
      options: [
        "Below $30,000",
        "$30,000 - $50,000",
        "$50,000 - $80,000",
        "$80,000 - $100,000",
        "Above $100,000",
      ],
      onInputChange: (e) =>
        handleUserInfoChange("income_range", e.target.value),
    },
    {
      text: "Industry",
      value: industry,
      options: [
        "Engineering",
        "Agriculture",
        "Education",
        "Art & Music",
        "IT",
        "Finance",
        "Logistics",
        "Others",
      ],
      onInputChange: (e) => handleUserInfoChange("industry", e.target.value),
    },
    {
      text: "Martial Status",
      value: marital_status,
      options: ["Married", "Single", "Open-Relationship", "Others"],
      onInputChange: (e) =>
        handleUserInfoChange("marital_status", e.target.value),
    },
    
  ];

  return (
    <section className="demographic-inputs">
      <Box
        sx={{
          paddingBlock: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {inputList.map((input) => {
          const { text, value, options, onInputChange } = input;

          return (
            <Box
              key={text}
              sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            >
              <Typography sx={{ width: "20%" }} variant="h6">
                {text}
              </Typography>
              <TextField
                select
                value={value}
                onChange={onInputChange}
                sx={{ width: "5%", minWidth: "20ch" }}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          );
        })}
      </Box>
    </section>
  );
}

import React from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { MenuItem } from "@mui/material";
import { educationOptions, ethnicityOptions, incomeOptions, industryOptions, maritalOptions, religionOptions } from "../../../../helpers/DemographicOptions";

export default React.memo(function DemographicInputSection({
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
      options: ethnicityOptions,
      onInputChange: (e) => handleUserInfoChange("ethnicity", e.target.value),
    },
    {
      text: "Education",
      value: education,
      options: educationOptions,
      onInputChange: (e) => handleUserInfoChange("education", e.target.value),
    },
    {
      text: "Religion",
      value: religion,
      options: religionOptions,
      onInputChange: (e) => handleUserInfoChange("religion", e.target.value),
    },
    {
      text: "Income",
      value: income_range,
      options: incomeOptions,
      onInputChange: (e) =>
        handleUserInfoChange("income_range", e.target.value),
    },
    {
      text: "Industry",
      value: industry,
      options: industryOptions,
      onInputChange: (e) => handleUserInfoChange("industry", e.target.value),
    },
    {
      text: "Martial Status",
      value: marital_status,
      options: maritalOptions,
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
})

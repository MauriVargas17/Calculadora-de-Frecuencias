import React from "react";
import { Box, Typography } from "@mui/material";
const TitleBanner = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#CAA3EF",
        color: "#fff",
        textAlign: "center",
        padding: 2,
        marginBottom: 0,
      }}
    >
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
    </Box>
  );
};

export default TitleBanner;

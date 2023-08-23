import React from "react";
import { Paper } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";

const Section = ({ children, width, height }) => {
  return (
    <Paper
      elevation={3}
      sx={{ width: width, padding: 2, height: height || 800 }}
    >
      <PerfectScrollbar>{children}</PerfectScrollbar>
    </Paper>
  );
};

export default Section;

import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const ThirdSection = ({ tableData }) => {
  return (
    <Paper elevation={3} sx={{ width: "50%", padding: 2 }}>
      <Typography variant="h6">Tabla de Distribucion de Frecuencias</Typography>
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableData.header.map((headerText, index) => (
                <TableCell key={index}>{headerText}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cellText, cellIndex) => (
                  <TableCell key={cellIndex}>{cellText}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ThirdSection;

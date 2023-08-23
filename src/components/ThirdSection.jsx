import React from "react";
import {
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Section from "./Section";

const ThirdSection = ({ tableData, height }) => {
  return (
    <Section width="60%" height={height}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Tabla de Distribucion de Frecuencias
      </Typography>
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
    </Section>
  );
};

export default ThirdSection;

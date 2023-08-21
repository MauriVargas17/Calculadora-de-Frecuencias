import React from "react";
import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const ThirdSection = ({ numRows, numColumns }) => {
  const generateTable = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const cells = [];
      for (let j = 0; j < numColumns; j++) {
        cells.push(<TableCell key={j}>Vacio</TableCell>);
      }
      rows.push(<TableRow key={i}>{cells}</TableRow>);
    }
    return rows;
  };

  return (
    <Paper elevation={3} sx={{ width: "50%", padding: 2 }}>
      <Typography variant="h6">Distribucion de Frecuencias</Typography>
      <TableContainer>
        <Table>
          <TableBody>{generateTable()}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ThirdSection;

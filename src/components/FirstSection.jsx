import React, { useState } from "react";
import {
  Paper,
  Typography,
  Select,
  MenuItem,
  TextField,
  Slider,
  Button,
  Grid,
} from "@mui/material";

const FirstSection = ({ onGenerateResults }) => {
  const [tecnologia, setTecnologia] = useState("");
  const [anchoDeBanda, setAnchoDeBanda] = useState("");
  const [anchoDeBandaSub, setAnchoDeBandaSub] = useState("");
  const [radioCelda, setRadioCelda] = useState(200);
  const [numeroRombico, setNumeroRombico] = useState(1);
  const [valorN, setValorN] = useState(2.7);
  const [sectoresPorCelda, setSectoresPorCelda] = useState(1);
  const [valorQ, setValorQ] = useState(1);

  const handleAnchoDeBanda = (event) => {
    setTecnologia(event.target.value);
    if (event.target.value === "1G") {
      setAnchoDeBanda("10 MHz");
      setAnchoDeBandaSub("30 kHz");
    } else if (event.target.value === "2G-Bolivia") {
      setAnchoDeBanda("15 MHz");
      setAnchoDeBandaSub("200 kHz");
    } else if (event.target.value === "2G-Europa") {
      setAnchoDeBanda("25 MHz");
      setAnchoDeBandaSub("200 kHz");
    }
  };

  const handleRadioCelda = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 200 && value <= 2000) {
      setRadioCelda(value);
    }
  };

  const handleNumeroRombico = (event) => {
    const value = event.target.value;
    if (Number.isInteger(Number(value))) {
      setNumeroRombico(value);
    }
  };

  const handleValorN = (event, newValue) => {
    setValorN(newValue);
  };

  const handleSectoresPorCelda = (event) => {
    setSectoresPorCelda(event.target.value);
  };

  const handleValorQ = (event) => {
    const value = event.target.value;
    if (Number.isInteger(Number(value))) {
      setValorQ(value);
    }
  };

  const handleGenerateResults = () => {
    const trimmedAnchoDeBanda = parseInt(anchoDeBanda.trim());
    const trimmedAnchoDeBandaSub = parseInt(anchoDeBandaSub.trim());
    console.log(trimmedAnchoDeBanda);
    const data = {
      anchoDeBanda: trimmedAnchoDeBanda,
      anchoDeBandaSub: trimmedAnchoDeBandaSub,
      radioCelda,
      numeroRombico,
      valorN,
      sectoresPorCelda,
      valorQ,
    };

    onGenerateResults(data);
  };

  return (
    <Paper elevation={3} sx={{ width: "30%", padding: 2 }}>
      <Typography variant="h6">Ajustes</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Tecnologia:</Typography>
          <Select value={tecnologia} onChange={handleAnchoDeBanda} fullWidth>
            <MenuItem value="1G">1G</MenuItem>
            <MenuItem value="2G-Bolivia">2G - Bolivia</MenuItem>
            <MenuItem value="2G-Europa">2G - Europa</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Typography>Ancho de Banda Total:</Typography>
          <Typography variant="h6">{anchoDeBanda}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Ancho de Banda de Subportadora:</Typography>
          <Typography variant="h6">{anchoDeBandaSub}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Radio de la celda:</Typography>
          <TextField
            type="number"
            value={radioCelda}
            onChange={handleRadioCelda}
            inputProps={{ min: 200, max: 2000 }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Numero Rombico:</Typography>
          <TextField
            type="text"
            value={numeroRombico}
            onChange={handleNumeroRombico}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Valor de N:</Typography>
          <Slider
            value={valorN}
            onChange={handleValorN}
            step={0.1}
            min={2.7}
            max={5}
            valueLabelDisplay="auto"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Numero de sectores por celda:</Typography>
          <Select
            value={sectoresPorCelda}
            onChange={handleSectoresPorCelda}
            fullWidth
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Typography>Valor de Q:</Typography>
          <TextField
            type="text"
            value={valorQ}
            onChange={handleValorQ}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateResults}
          >
            Generar resultados
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FirstSection;

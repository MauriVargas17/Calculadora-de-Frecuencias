import React, { useState } from "react";
import {
  Typography,
  Select,
  MenuItem,
  TextField,
  Slider,
  Button,
  Grid,
} from "@mui/material";
import Section from "./Section";
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material/styles";

const violetBase = "#CAA3EF";
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#123",
    },
  },
});

const FirstSection = ({ onGenerateResults }) => {
  const [tecnologia, setTecnologia] = useState("");
  const [anchoDeBanda, setAnchoDeBanda] = useState("");
  const [anchoDeBandaSub, setAnchoDeBandaSub] = useState("");
  const [radioCelda, setRadioCelda] = useState(200);
  const [numeroRombico, setNumeroRombico] = useState(1);
  const [valorN, setValorN] = useState(2.7);
  const [sectoresPorCelda, setSectoresPorCelda] = useState(1);
  const [valorQ, setValorQ] = useState(1);
  const [frecBase, setFrecBase] = useState(0);

  const handleAnchoDeBanda = (event) => {
    setTecnologia(event.target.value);
    if (event.target.value === "1G") {
      setAnchoDeBanda("10 MHz");
      setAnchoDeBandaSub("30 kHz");
      setFrecBase(800);
    } else if (event.target.value === "2G-Bolivia") {
      setAnchoDeBanda("15 MHz");
      setAnchoDeBandaSub("200 kHz");
      setFrecBase(1850);
    } else if (event.target.value === "2G-Europa") {
      setAnchoDeBanda("25 MHz");
      setAnchoDeBandaSub("200 kHz");
      setFrecBase(890);
    }
  };

  const handleRadioCelda = (event) => {
    const value = parseInt(event.target.value);

    setRadioCelda(value);
  };

  const handleNumeroRombico = (event) => {
    const value = event.target.value;
    if (Number.isInteger(Number(value))) {
      setNumeroRombico(value);
      console.log("Seteando rombico a " + value);
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

  const isRhombic = (number) => {
    for (let i = -number; i <= number; i++) {
      for (let j = -number; j <= number; j++) {
        const expressionValue = i ** 2 + j ** 2 + i * j;
        if (expressionValue === Number(number)) {
          return true;
        }
      }
    }
    return false;
  };

  const handleGenerateResults = () => {
    const trimmedAnchoDeBanda = parseInt(anchoDeBanda.trim());
    const trimmedAnchoDeBandaSub = parseInt(anchoDeBandaSub.trim());
    const isRCCorrect =
      !isNaN(radioCelda) && radioCelda >= 200 && radioCelda <= 2000;
    const isRomCorrect = isRhombic(numeroRombico);

    if (isRCCorrect && tecnologia && valorQ) {
      if (numeroRombico && isRomCorrect) {
        const data = {
          anchoDeBanda: trimmedAnchoDeBanda,
          anchoDeBandaSub: trimmedAnchoDeBandaSub / 1000,
          radioCelda,
          numeroRombico,
          valorN,
          sectoresPorCelda,
          valorQ,
          frecBase,
          tecnologia,
        };

        onGenerateResults(data);
      } else {
        window.alert("Ingresa un numero rombico valido");
      }
    } else {
      window.alert("Llena los datos correctamente");
    }
  };

  return (
    <Section width="20%">
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Ajustes
      </Typography>
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
          <Typography>Radio de la celda (m):</Typography>
          <TextField
            type="number"
            value={radioCelda}
            onChange={handleRadioCelda}
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
          <ThemeProvider theme={theme}>
            <Slider
              value={valorN}
              onChange={handleValorN}
              step={0.1}
              min={2.7}
              max={5}
              marks
              color="violet"
              valueLabelDisplay="auto"
              fullWidth
            />
          </ThemeProvider>
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
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="violet"
              onClick={handleGenerateResults}
            >
              Generar resultados
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Section>
  );
};

export default FirstSection;

import React, { useState, useEffect } from "react";
import { Paper, Typography, Grid } from "@mui/material";

const SecondSection = ({ data }) => {
  const [numeroSubportadoras, setNumeroSubportadoras] = useState(0);
  const [distanciaReutilizacion, setDistanciaReutilizacion] = useState(0);
  const [relacionProteccion, setRelacionProteccion] = useState(0);
  const [frecuenciasPorSector, setFrecuenciasPorSector] = useState(0);
  const [areaCoberturaTotal, setAreaCoberturaTotal] = useState(0);

  useEffect(() => {
    if (data) {
      setNumeroSubportadoras(data.anchoDeBanda * 2);
      setDistanciaReutilizacion(data.anchoDeBanda * 0.5);
      setRelacionProteccion(data.anchoDeBanda + 5);
      setFrecuenciasPorSector(data.anchoDeBanda * 2);
      setAreaCoberturaTotal(data.anchoDeBanda * data.valorN);
    }
  }, [data]);

  return (
    <Paper elevation={3} sx={{ width: "40%", padding: 2 }}>
      <Typography variant="h6">Resultados</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Numero de subportadoras:</Typography>
          <Typography variant="h6">{numeroSubportadoras}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Distancia de reutilización:</Typography>
          <Typography variant="h6">{distanciaReutilizacion}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Relación de protección:</Typography>
          <Typography variant="h6">{relacionProteccion}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Numero de frecuencias por sector:</Typography>
          <Typography variant="h6">{frecuenciasPorSector}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Área total de cobertura:</Typography>
          <Typography variant="h6">{areaCoberturaTotal}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SecondSection;

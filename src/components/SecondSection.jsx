import React, { useCallback, useState, useEffect } from "react";
import { Paper, Typography, Grid } from "@mui/material";

const SecondSection = ({ data }) => {
  const [numeroSubportadoras, setNumeroSubportadoras] = useState(0);
  const [distanciaReutilizacion, setDistanciaReutilizacion] = useState(0);
  const [relacionProteccion, setRelacionProteccion] = useState(0);
  const [frecuenciasPorSector, setFrecuenciasPorSector] = useState(0);
  const [areaCoberturaTotal, setAreaCoberturaTotal] = useState(0);

  const calNumeroSubportadoras = useCallback(() => {
    return Math.floor(data.anchoDeBanda / data.anchoDeBandaSub - 1);
  });

  const calDistanciaReutilizacion = useCallback(() => {
    return Math.sqrt(3 * data.numeroRombico * data.radioCelda ** 2).toFixed(3);
  });

  const calRelacionProteccion = useCallback(() => {
    return (
      10 *
      Math.log(
        (distanciaReutilizacion / data.radioCelda - 1) ** data.valorN / 6
      )
    ).toFixed(3);
  });

  const calFrecuenciasPorSector = useCallback(() => {
    return Math.floor(
      numeroSubportadoras / (data.numeroRombico * data.sectoresPorCelda)
    );
  });

  const calAreaCoberturaTotal = useCallback(() => {
    return (
      ((data.numeroRombico * (data.radioCelda ** 2 * 3 * Math.sqrt(3))) / 2) *
      data.valorQ
    ).toFixed(3);
  });

  useEffect(() => {
    if (data) {
      setNumeroSubportadoras(calNumeroSubportadoras());
      setDistanciaReutilizacion(calDistanciaReutilizacion());
      setRelacionProteccion(calRelacionProteccion());
      setFrecuenciasPorSector(calFrecuenciasPorSector());
      setAreaCoberturaTotal(calAreaCoberturaTotal());
    }
  }, [
    data,
    calAreaCoberturaTotal,
    calDistanciaReutilizacion,
    calFrecuenciasPorSector,
    calNumeroSubportadoras,
    calRelacionProteccion,
  ]);

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
          <Typography variant="h6">{distanciaReutilizacion} m</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Relación de protección:</Typography>
          <Typography variant="h6">{relacionProteccion} dB</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Numero de frecuencias por sector:</Typography>
          <Typography variant="h6">{frecuenciasPorSector}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Área total de cobertura:</Typography>
          <Typography variant="h6">{areaCoberturaTotal} m2</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SecondSection;

import React, { useCallback, useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import Section from "./Section";

const SecondSection = ({ data }) => {
  const [numeroSubportadoras, setNumeroSubportadoras] = useState(0);
  const [distanciaReutilizacion, setDistanciaReutilizacion] = useState(0);
  const [relacionProteccion, setRelacionProteccion] = useState(0);
  const [frecuenciasPorSector, setFrecuenciasPorSector] = useState(0);
  const [areaCoberturaTotal, setAreaCoberturaTotal] = useState(0);
  const [anchoDeBanda, setAnchoDeBanda] = useState(0);
  const [anchoDeBandaSub, setAnchoDeBandaSub] = useState(0);
  const [radioCelda, setRadioCelda] = useState(0);
  const [numeroRombico, setNumeroRombico] = useState(0);
  const [valorN, setValorN] = useState(0);
  const [sectoresPorCelda, setSectoresPorCelda] = useState(0);
  const [valorQ, setValorQ] = useState(1);
  const [frecBase, setFrecBase] = useState(0);
  const [tecnologia, setTecnologia] = useState("");

  useEffect(() => {
    if (data) {
      setAnchoDeBanda(data.anchoDeBanda);
      setAnchoDeBandaSub(data.anchoDeBandaSub);
      setRadioCelda(data.radioCelda);
      setNumeroRombico(data.numeroRombico);
      setValorN(data.valorN);
      setSectoresPorCelda(data.sectoresPorCelda);
      setValorQ(data.valorQ);
      setFrecBase(data.frecBase);
      setTecnologia(data.tecnologia);
    }
  }, [data]);

  const calNumeroSubportadoras = useCallback(() => {
    return tecnologia === "1G"
      ? Math.floor(anchoDeBanda / anchoDeBandaSub)
      : Math.floor(anchoDeBanda / anchoDeBandaSub - 1);
  }, [anchoDeBanda, anchoDeBandaSub, tecnologia]);

  const calDistanciaReutilizacion = useCallback(() => {
    return Number(valorQ) === 1
      ? 0
      : Math.sqrt(3 * numeroRombico * radioCelda ** 2).toFixed(3);
  }, [valorQ, numeroRombico, radioCelda]);

  const calRelacionProteccion = useCallback(() => {
    return distanciaReutilizacion
      ? (
          10 * Math.log((distanciaReutilizacion / radioCelda - 1) ** valorN / 6)
        ).toFixed(3)
      : 0;
  }, [distanciaReutilizacion, radioCelda, valorN]);

  const calFrecuenciasPorSector = useCallback(() => {
    return Math.floor(numeroSubportadoras / (numeroRombico * sectoresPorCelda));
  }, [numeroRombico, numeroSubportadoras, sectoresPorCelda]);

  const calAreaCoberturaTotal = useCallback(() => {
    return (
      ((numeroRombico * (radioCelda ** 2 * 3 * Math.sqrt(3))) / 2) *
      valorQ
    ).toFixed(3);
  }, [numeroRombico, radioCelda, valorQ]);

  useEffect(() => {
    if (data) {
      setNumeroSubportadoras(calNumeroSubportadoras());
      setDistanciaReutilizacion(calDistanciaReutilizacion());
      setRelacionProteccion(calRelacionProteccion());
      setFrecuenciasPorSector(calFrecuenciasPorSector());
      setAreaCoberturaTotal(calAreaCoberturaTotal());
    }
    //console.log(data.valorQ);
  }, [
    data,
    calAreaCoberturaTotal,
    calDistanciaReutilizacion,
    calFrecuenciasPorSector,
    calNumeroSubportadoras,
    calRelacionProteccion,
  ]);

  return (
    <Section width="20%">
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Resultados
      </Typography>
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
    </Section>
  );
};

export default SecondSection;

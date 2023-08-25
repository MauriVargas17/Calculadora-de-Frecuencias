import React, { useState } from "react";
import "../styles/MainPage.css";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import TitleBanner from "../components/TitleBanner";

const MainPage = () => {
  const [secondSectionData, setSecondSectionData] = useState(null);
  const [data, setData] = useState({});
  const headerLetters = ["a", "b", "c"];

  const handleGenerateResults = (data) => {
    setSecondSectionData(data);
    setData(data);
  };

  const numeroSubportadoras = Math.floor(
    data.anchoDeBanda / data.anchoDeBandaSub - 1
  );
  const numeroColumnas = data.sectoresPorCelda === 1 ? 7 : 21;
  const numeroFilas = Math.ceil(
    (numeroSubportadoras / numeroColumnas) * data.valorQ
  );

  let counter = 0;
  let numerosIngresados = 0;
  let frecuencia = data.frecBase;
  let repeticiones = data.valorQ;

  const headerGenerator = (index) => {
    const header = headerLetters[index % 3];
    if (index % 3 === 0) {
      counter += 1;
    }
    return counter + header;
  };

  const frecGenerator = () => {
    frecuencia += data.anchoDeBandaSub;

    if (
      numeroSubportadoras >= numerosIngresados &&
      data.frecBase + data.anchoDeBanda >= frecuencia
    ) {
      numerosIngresados += 1;
      return frecuencia.toFixed(3);
    } else if (repeticiones > 1) {
      repeticiones -= 1;
      numerosIngresados = 0;
      frecuencia = data.frecBase;
      return frecuencia.toFixed(3);
    }
    return "-";
  };

  const tableData = {
    header: Array.from(
      { length: numeroColumnas },
      (_, index) =>
        `${numeroColumnas === 21 ? headerGenerator(index) : index + 1}`
    ),
    rows: Array.from(
      {
        length: numeroFilas,
      },
      () => Array.from({ length: numeroColumnas }, () => frecGenerator())
    ),
  };

  return (
    <div className="main-page">
      <TitleBanner title={"Calculadora de Andrea"}></TitleBanner>
      <div className="sections">
        <FirstSection onGenerateResults={handleGenerateResults} />
        <SecondSection data={secondSectionData} />
        <ThirdSection
          tableData={tableData}
          height={numeroFilas > 14 ? 800 + (numeroFilas - 14) * 60 : 800}
        />
      </div>
    </div>
  );
};

export default MainPage;

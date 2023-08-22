import React, { useState } from "react";
import "../styles/MainPage.css";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

const MainPage = () => {
  const [secondSectionData, setSecondSectionData] = useState(null);
  const [data, setData] = useState({});
  const headerLetters = ["a", "b", "c"];

  const handleGenerateResults = (data) => {
    setSecondSectionData(data);
    setData(data);
  };
  //Ejemplo de formato de tabla
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;
  const numeroSubportadoras = Math.floor(
    data.anchoDeBanda / data.anchoDeBandaSub - 1
  );
  let counter = 0;
  let numerosIngresados = 0;
  let frecuencia = data.frecBase;
  let repeticiones = data.valorQ;

  const headerGenerator = (index) => {
    let header = "";
    header = headerLetters[index % 3];
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
      console.log(numerosIngresados);
      repeticiones -= 1;
      numerosIngresados = 0;
      frecuencia = data.frecBase;
      return frecuencia.toFixed(3);
    }
    return "-";
  };

  const tableData = {
    header: Array.from(
      { length: 21 },
      (_, index) => `${headerGenerator(index)}`
    ),
    //header: Array.from({ length: 21 }, (_, index) => `${counter === 3 ? index + 1 : counter - index + 1}`),
    rows: Array.from(
      {
        length: Math.ceil((numeroSubportadoras / 21) * data.valorQ),
      },
      () => Array.from({ length: 21 }, () => frecGenerator())
    ),
  };

  return (
    <div className="main-page">
      <FirstSection onGenerateResults={handleGenerateResults} />
      <SecondSection data={secondSectionData} />
      {/*<ThirdSection numRows={4} numColumns={21} />*/}
      <ThirdSection tableData={tableData} />
    </div>
  );
};

export default MainPage;

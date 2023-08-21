import React, { useState } from "react";
import "../styles/MainPage.css";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

const MainPage = () => {
  const [secondSectionData, setSecondSectionData] = useState(null);

  const handleGenerateResults = (data) => {
    setSecondSectionData(data);
  };
  //Ejemplo de formato de tabla
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const tableData = {
    header: Array.from({ length: 21 }, (_, index) => `Columna ${index + 1}`),
    rows: Array.from({ length: 10 }, () =>
      Array.from({ length: 21 }, () => generateRandomNumber())
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

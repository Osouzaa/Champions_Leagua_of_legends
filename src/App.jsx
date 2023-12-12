import React, { useEffect, useState } from "react";
import { Champions } from "./components/champios";

function App() {
  const [championData, setChampionData] = useState(null);
  const [index, setIndex] = useState(0);

  const ApiUrl =
    "https://ddragon.leagueoflegends.com/cdn/13.24.1/data/pt_BR/champion.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiUrl);
        const data = await response.json();
        setChampionData(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
    fetchData();
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Object.keys(championData).length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + Object.keys(championData).length) %
        Object.keys(championData).length
    );
  };

  if (!championData) {
    return <div>Carregando...</div>;
  }

  const championKey = Object.keys(championData)[index];
  const champion = championData[championKey];
  console.log(champion);

  return (
    <div className="App">
      <Champions champion={champion} onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
}

export default App;

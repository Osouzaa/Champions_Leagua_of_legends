// Sinopse.js
import React, { useEffect, useState } from "react";
import * as C from "./style";

const Sinopse = ({ name }) => {
  const [sinopseData, setSinopseData] = useState(null);

  useEffect(() => {
    const fetchSinopseData = async () => {
      try {
        const response = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/13.24.1/data/pt_BR/champion/${name}.json`
        );
        const data = await response.json();
        setSinopseData(data);
      } catch (error) {
        console.error("Erro ao buscar dados da sinopse:", error);
      }
    };

    fetchSinopseData();
  }, [name]);
  console.log("Esta sinopse:", sinopseData?.data?.[name]?.name);

  // data.Aatrox.name
  if (!sinopseData) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <p>{sinopseData?.data?.[name]?.name}</p>
    </div>
  );
};

export default Sinopse;

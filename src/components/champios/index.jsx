import React, { useState } from "react";
import * as C from "./style";
import Sinopse from "../sinospse";

const traduzirTag = (tagEmIngles) => {
  const traducoes = {
    Assassin: "Assassino",
    Fighter: "Lutador",
    Mage: "Mago",
    Marksman: "Atirador",
    Support: "Suporte",
    Tank: "Tanque",
  };

  return traducoes[tagEmIngles] || tagEmIngles;
};

export const Champions = ({ champion, onNext, onPrev }) => {
  const [showSinopse, setShowSinopse] = useState(false);

  const toggleSinopse = () => {
    setShowSinopse(!showSinopse);
  };

  return (
    <C.Container>
      <C.ContentView>
        <C.Right>
          <div className="Content">
            <p className={champion.name.length > 10 ? "small" : ""}>
              {champion.name}
            </p>

            <img
              src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champion.image.full}`}
              alt=""
            />
          </div>
          <div className="contentButton">
            <button onClick={onPrev}>Voltar</button>
            <button onClick={onNext}>Proximo</button>
          </div>
        </C.Right>
        <C.Left>
          <h1>{champion.title}</h1>
          <C.Description>
            {champion.blurb} <span onClick={toggleSinopse}> Ver mais</span>
          </C.Description>

          <div>
            <C.ContentHabilidaddes>
              <div>
                <h3>Informações: </h3>
                <C.List>
                  <li>Ataque: {champion.info.attack}</li>
                  <li>Defesa: {champion.info.defense}</li>
                  <li>Mágica: {champion.info.magic}</li>
                  <li>Dificuldade: {champion.info.difficulty}</li>
                </C.List>
              </div>
              <div>
                <h3>Função: </h3>

                <C.List>
                  {champion.tags.map((item, index) => (
                    <li key={index}>{traduzirTag(item)}</li>
                  ))}
                </C.List>
              </div>
            </C.ContentHabilidaddes>
          </div>
        </C.Left>
      </C.ContentView>
    </C.Container>
  );
};

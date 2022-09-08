import React, { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fectData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }
    fectData();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return <Character key={c} character={character} />;
      })}
    </div>
  );
}

export default CharacterList;

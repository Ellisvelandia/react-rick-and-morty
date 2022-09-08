import React, { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

function App() {
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
      <h1>Rick and morty</h1>
      <CharacterList/>
      <Character/>
    
    </div>
  );
}

export default App;

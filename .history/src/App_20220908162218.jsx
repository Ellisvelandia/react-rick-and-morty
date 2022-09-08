import React, { useEffect, useState } from "react";


function App() {

const [characters, setCharacters] = useState([])

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
      {
        characters.map(character => {
          return
        })
      }
    </div>
  )
}

export default App;

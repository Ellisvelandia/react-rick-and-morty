import React, { useEffect, useState } from "react";


function App() {

const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fectData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      .(data);
    }
    fectData();
  }, []);

  return <div>Rick and Morty</div>;
}

export default App;

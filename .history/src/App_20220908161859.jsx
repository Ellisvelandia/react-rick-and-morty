import React, { useEffect, useState } from "react";


function App() {

const [state, setstate] = useState(initialState)

  useEffect(() => {
    async function fectData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data);
    }
    fectData();
  }, []);

  return <div>Rick and Morty</div>;
}

export default App;

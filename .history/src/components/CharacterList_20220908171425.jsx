import React, { useEffect, useState } from "react";
import Character from "./Character";

function NavPage() {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: 1</p>
      <button className="btn btn-primary btn-sm" onClick={}>Page 2</button>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fectData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fectData();
  }, []);

  return (
    <div className="container">
      <NavPage />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;

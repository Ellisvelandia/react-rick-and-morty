import React from "react";

function Character({ character }) {
  return (
    <div class>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default Character;

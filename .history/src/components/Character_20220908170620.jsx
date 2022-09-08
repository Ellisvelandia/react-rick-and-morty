import React from "react";

function Character({ character }) {
  return (
    <div className="text-center card card-body p-8">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default Character;

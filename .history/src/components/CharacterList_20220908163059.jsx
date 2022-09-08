import React from 'react'

function CharacterList() {
  return (
    <div>
        {characters.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}  
    </div>
  )
}

export default CharacterList
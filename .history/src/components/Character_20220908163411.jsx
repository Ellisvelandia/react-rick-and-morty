import React from 'react'

function Character() {
  return (
    <div key={character.id}>
    <h2>{character.name}</h2>
    <img src={character.image} alt={character.name} />
  </div>
  )
}

export default Character
import React, {useEffect} from 'react'

function App() {

  useEffect(() => {
const response = await fetch("https://rickandmortyapi.com/api/character")
const data = await response.json();
console.log(data);

  }, [])

  return (
    <div>Rick and Morty</div>
  )
}

export default App

 
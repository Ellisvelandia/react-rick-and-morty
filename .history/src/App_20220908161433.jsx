import React, {useEffect} from 'react'

function App() {

  useEffect(() => {
const response = await fetch("https://rickandmortyapi.com/api/character")
await data = response.json

  }, [])

  return (
    <div>Rick and Morty</div>
  )
}

export default App

 
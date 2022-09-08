import React, {useEffect} from 'react'

function App() {

  useEffect(() => {
const response = await fetch("https://rickandmortyapi.com/api/character")
await response

  }, [])

  return (
    <div>Rick and Morty</div>
  )
}

export default App

 
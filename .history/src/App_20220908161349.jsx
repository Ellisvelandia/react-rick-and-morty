import React, {useEffect} from 'react'

function App() {

  useEffect(() => {
await fetch("https://rickandmortyapi.com/api/character")

  }, [])

  return (
    <div>Rick and Morty</div>
  )
}

export default App

 